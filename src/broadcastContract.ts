import {
  Broadcast
} from "../generated/BroadcastContract/BroadcastContract"

import { User, Message } from "../generated/schema"
// import { BigInt } from "@graphprotocol/graph-ts";

export function handleBroadcast(event: Broadcast): void {
  const userId = event.params._user.toHexString()
  const timestamp = event.params._timestamp.toString()

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  const message = new Message(`${userId}-${timestamp}`)
  message.from = userId;
  message.content = event.params._message;
  message.timestamp = timestamp;
  message.txHash = event.transaction.hash.toHexString()
  message.save();
}
