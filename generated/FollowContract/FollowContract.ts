// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Follow extends ethereum.Event {
  get params(): Follow__Params {
    return new Follow__Params(this);
  }
}

export class Follow__Params {
  _event: Follow;

  constructor(event: Follow) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get follower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UnFollow extends ethereum.Event {
  get params(): UnFollow__Params {
    return new UnFollow__Params(this);
  }
}

export class UnFollow__Params {
  _event: UnFollow;

  constructor(event: UnFollow) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get follower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FollowContract extends ethereum.SmartContract {
  static bind(address: Address): FollowContract {
    return new FollowContract("FollowContract", address);
  }

  isFollowing(user: Address, follower: Address): boolean {
    let result = super.call(
      "isFollowing",
      "isFollowing(address,address):(bool)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromAddress(follower)]
    );

    return result[0].toBoolean();
  }

  try_isFollowing(
    user: Address,
    follower: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isFollowing",
      "isFollowing(address,address):(bool)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromAddress(follower)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class FollowUserCall extends ethereum.Call {
  get inputs(): FollowUserCall__Inputs {
    return new FollowUserCall__Inputs(this);
  }

  get outputs(): FollowUserCall__Outputs {
    return new FollowUserCall__Outputs(this);
  }
}

export class FollowUserCall__Inputs {
  _call: FollowUserCall;

  constructor(call: FollowUserCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FollowUserCall__Outputs {
  _call: FollowUserCall;

  constructor(call: FollowUserCall) {
    this._call = call;
  }
}

export class UnFollowUserCall extends ethereum.Call {
  get inputs(): UnFollowUserCall__Inputs {
    return new UnFollowUserCall__Inputs(this);
  }

  get outputs(): UnFollowUserCall__Outputs {
    return new UnFollowUserCall__Outputs(this);
  }
}

export class UnFollowUserCall__Inputs {
  _call: UnFollowUserCall;

  constructor(call: UnFollowUserCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnFollowUserCall__Outputs {
  _call: UnFollowUserCall;

  constructor(call: UnFollowUserCall) {
    this._call = call;
  }
}
