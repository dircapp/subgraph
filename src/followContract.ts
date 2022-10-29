import {
  Follow,
  UnFollow
} from "../generated/FollowContract/FollowContract"

import { User, Connection } from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'
// import { BigInt } from "@graphprotocol/graph-ts";

export function handleFollow(event: Follow): void {
  const followerId = event.params.follower.toHexString();
  const userId = event.params.user.toHexString();
  const timestamp = event.params.timestamp.toString();

  let follower = User.load(followerId);
  if (!follower) {
    follower = new User(followerId);
    follower.save()
  }

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save()
  }

  let connection = new Connection(`${userId}-${followerId}`)
  connection.user = userId;
  connection.follower = followerId;
  connection.timestamp = timestamp;
  connection.txHash = event.transaction.hash.toHexString();
  connection.save()
}

export function handleUnFollow(event: UnFollow): void {
  const followerId = event.params.follower.toHexString();
  const userId = event.params.user.toHexString();

  let follower = User.load(userId);
  let user = User.load(userId);
  let connection = Connection.load(`${userId}-${followerId}`)
  if (!follower || !user || !connection) return

  store.remove('Connection', `${userId}-${followerId}`)
}
