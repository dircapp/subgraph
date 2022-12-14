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

export class Broadcast extends ethereum.Event {
  get params(): Broadcast__Params {
    return new Broadcast__Params(this);
  }
}

export class Broadcast__Params {
  _event: Broadcast;

  constructor(event: Broadcast) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _message(): string {
    return this._event.parameters[1].value.toString();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BroadcastContract extends ethereum.SmartContract {
  static bind(address: Address): BroadcastContract {
    return new BroadcastContract("BroadcastContract", address);
  }
}

export class BroadcastCall extends ethereum.Call {
  get inputs(): BroadcastCall__Inputs {
    return new BroadcastCall__Inputs(this);
  }

  get outputs(): BroadcastCall__Outputs {
    return new BroadcastCall__Outputs(this);
  }
}

export class BroadcastCall__Inputs {
  _call: BroadcastCall;

  constructor(call: BroadcastCall) {
    this._call = call;
  }

  get _message(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class BroadcastCall__Outputs {
  _call: BroadcastCall;

  constructor(call: BroadcastCall) {
    this._call = call;
  }
}
