import {
  Broadcast,
  ReplyBroadcast
} from "../generated/BroadcastContract/BroadcastContract"

import { User, BroadcastMessage, BroadcastReply } from "../generated/schema"
// import { BigInt } from "@graphprotocol/graph-ts";

export function handleBroadcast(event: Broadcast): void {
  const userId = event.params._user.toHexString()

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  const message = new BroadcastMessage(`${userId}-${event.block.timestamp.toString()}`)
  message.from = userId;
  message.content = event.params._message;
  message.timestamp = event.block.timestamp.toString();
  message.txHash = event.transaction.hash.toHexString()
  message.save();
}

export function handleReplyBroadcast(event: ReplyBroadcast): void {
  const userId = event.params._user.toHexString()
  const broadcastMessageId = event.params._messageId

  let broadcastMessage = BroadcastMessage.load(broadcastMessageId);
  if(!broadcastMessage) return;
  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  const reply = new BroadcastReply(`${userId}-${broadcastMessageId}-${event.block.timestamp.toString()}`)
  reply.from = userId;
  reply.content = event.params._message;
  reply.origin = broadcastMessageId;
  reply.timestamp = event.block.timestamp.toString();
  reply.txHash = event.transaction.hash.toHexString()

  reply.save();
}
