import {
  CreateChannel,
  JoinChannel,
  LeaveChannel,
  AddAdmin,
  RemoveAdmin,
  BanUser,
  UnBanUser,
  Chat,
  ReplyChat
} from "../generated/ChannelContract/ChannelContract"

import { User, Channel, UserChannel, ChatMessage, ChatReply} from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'
// import { BigInt } from "@graphprotocol/graph-ts";

export function handleCreateChannel(event: CreateChannel): void {
  const channelId = event.params.id.toString();
  const userId = event.params.owner.toHexString();
  const timestamp = event.block.timestamp.toString();

  let channel = new Channel(channelId)
  channel.name = event.params.name.toString();
  channel.description = event.params.description.toString();
  channel.isGated = event.params.isGated;
  channel.contract = event.params._contract.toHexString();
  channel.chainId = event.params.chainId.toI32();
  channel.minHolding = event.params.minHolding.toI32();
  channel.isRestricted = event.params.chatRestricted;
  channel.admins = [];
  let arr = event.params.admins
  if(arr) {
    let admins = channel.admins
    for(let i:i32=0; i<arr.length; i++) {
      admins!.push(arr[i].toHexString());
    }
    channel.admins = admins
  }

  channel.banned = [];
  let banned = event.params.banned;
  if(banned) {
    let arr2 = channel.banned;
    for(let i:i32=0; i<banned.length; i++ ) {
        arr2!.push(banned[i].toHexString());
    }
    channel.banned = arr2
  }
  channel.owner = userId;
  channel.save();


  let userChannel = new UserChannel(`${userId}-${channelId}`)
  userChannel.user = userId
  userChannel.channel = channelId
  userChannel.timestamp = timestamp
  userChannel.save()
}

export function handleJoinChannel(event: JoinChannel): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();
  const timestamp = event.block.timestamp.toString();

  let userChannel = new UserChannel(`${userId}-${channelId}`);
  userChannel.user = userId;
  userChannel.channel = channelId;
  userChannel.timestamp = timestamp;

  userChannel.save();
}

export function handleLeaveChannel(event: LeaveChannel): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();
  const timestamp = event.block.timestamp.toString();

  let userChannel = UserChannel.load(`${userId}-${channelId}`);
  if(!userChannel) return;
  store.remove('UserChannel', `${userId}-${channelId}`);
}

export function handleAddAdmin(event: AddAdmin): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();

  let channel = Channel.load(channelId);
  if(!channel) return;

  if(!channel.admins) {
    channel.admins = []
  }
  let arr = channel.admins
  arr!.push(userId);
  channel.admins = arr;
  channel.save();
}

export function handleRemoveAdmin(event: RemoveAdmin): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();

  let channel = Channel.load(channelId);
  if(!channel) return;
  let array = channel.admins;
  if(!array) return
  const index = array.indexOf(userId);
  array.splice(index, 1);
  channel.admins = array;
  channel.save();
}

export function handleBanUser(event: BanUser): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();

  let channel = Channel.load(channelId);
  if(!channel) return;

  if(!channel.banned) {
    channel.banned=[];
  }
  let banned = channel.banned;
  banned!.push(userId);
  channel.banned = banned;
  channel.save();
}

export function handleUnBanUser(event: UnBanUser): void {
  const channelId = event.params.id.toString();
  const userId = event.params.user.toHexString();

  let channel = Channel.load(channelId);
  if(!channel) return;
  let array = channel.banned;
  if(!array) return;
  const index = array.indexOf(userId);
  array.splice(index, 1);
  channel.banned = array;
  channel.save();
}

export function handleChat(event: Chat): void {
  const channelId = event.params._channelId.toString();
  const userId = event.params._user.toHexString();
  const timestamp = event.block.timestamp.toString();

  let channel = Channel.load(channelId);
  if(!channel) return;

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.name = userId;
    user.save();
  }

  let chatMessage = new ChatMessage(`${userId}-${channelId}-${timestamp}`)
  chatMessage.channel = channelId;
  chatMessage.from = userId;
  chatMessage.content = event.params._message.toString();
  chatMessage.timestamp = timestamp;
  chatMessage.txHash = event.transaction.hash.toHexString();

  chatMessage.save();
}

export function handleReplyChat(event: ReplyChat): void {
  const userId = event.params._user.toHexString()
  const chatMessageId = event.params._messageId

  let chatMessage = ChatMessage.load(chatMessageId);
  if(!chatMessage) return;
  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.name = userId;
    user.save();
  }

  const reply = new ChatReply(`${userId}-${chatMessageId}-${event.block.timestamp.toString()}`)
  reply.channel = event.params._channelId.toString();
  reply.from = userId;
  reply.content = event.params._message;
  reply.origin = chatMessageId;
  reply.timestamp = event.block.timestamp.toString();
  reply.txHash = event.transaction.hash.toHexString()

  reply.save();
}
