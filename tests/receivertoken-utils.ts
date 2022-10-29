import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ReceivertokenApprovalForAll,
  ReceivertokenOwnershipTransferred,
  ReceiverBatchMint,
  ReceiverBatchTransfer,
  ReceiverBurn,
  ReceiverChannelMint,
  ReceiverMint,
  ReceiverTransfer,
  RelayedReceiverMint,
  ReceivertokenTransferBatch,
  ReceivertokenTransferSingle,
  ReceivertokenURI
} from "../generated/Receivertoken/Receivertoken"

export function createReceivertokenApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ReceivertokenApprovalForAll {
  let receivertokenApprovalForAllEvent = changetype<
    ReceivertokenApprovalForAll
  >(newMockEvent())

  receivertokenApprovalForAllEvent.parameters = new Array()

  receivertokenApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  receivertokenApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  receivertokenApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return receivertokenApprovalForAllEvent
}

export function createReceivertokenOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ReceivertokenOwnershipTransferred {
  let receivertokenOwnershipTransferredEvent = changetype<
    ReceivertokenOwnershipTransferred
  >(newMockEvent())

  receivertokenOwnershipTransferredEvent.parameters = new Array()

  receivertokenOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  receivertokenOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return receivertokenOwnershipTransferredEvent
}

export function createReceiverBatchMintEvent(
  to: Address,
  tokenIds: Array<BigInt>,
  amounts: Array<BigInt>,
  timestamp: BigInt
): ReceiverBatchMint {
  let receiverBatchMintEvent = changetype<ReceiverBatchMint>(newMockEvent())

  receiverBatchMintEvent.parameters = new Array()

  receiverBatchMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receiverBatchMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )
  receiverBatchMintEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  receiverBatchMintEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverBatchMintEvent
}

export function createReceiverBatchTransferEvent(
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  amounts: Array<BigInt>,
  timestamp: BigInt
): ReceiverBatchTransfer {
  let receiverBatchTransferEvent = changetype<ReceiverBatchTransfer>(
    newMockEvent()
  )

  receiverBatchTransferEvent.parameters = new Array()

  receiverBatchTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  receiverBatchTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receiverBatchTransferEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  receiverBatchTransferEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  receiverBatchTransferEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverBatchTransferEvent
}

export function createReceiverBurnEvent(
  from: Address,
  tokenId: BigInt,
  amount: BigInt,
  timestamp: BigInt
): ReceiverBurn {
  let receiverBurnEvent = changetype<ReceiverBurn>(newMockEvent())

  receiverBurnEvent.parameters = new Array()

  receiverBurnEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  receiverBurnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  receiverBurnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  receiverBurnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverBurnEvent
}

export function createReceiverChannelMintEvent(
  to: Address,
  tokenId: BigInt,
  amount: BigInt,
  timestamp: BigInt
): ReceiverChannelMint {
  let receiverChannelMintEvent = changetype<ReceiverChannelMint>(newMockEvent())

  receiverChannelMintEvent.parameters = new Array()

  receiverChannelMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receiverChannelMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  receiverChannelMintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  receiverChannelMintEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverChannelMintEvent
}

export function createReceiverMintEvent(
  to: Address,
  tokenId: BigInt,
  amount: BigInt,
  timestamp: BigInt
): ReceiverMint {
  let receiverMintEvent = changetype<ReceiverMint>(newMockEvent())

  receiverMintEvent.parameters = new Array()

  receiverMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receiverMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  receiverMintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  receiverMintEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverMintEvent
}

export function createReceiverTransferEvent(
  from: Address,
  to: Address,
  id: BigInt,
  amount: BigInt,
  timestamp: BigInt
): ReceiverTransfer {
  let receiverTransferEvent = changetype<ReceiverTransfer>(newMockEvent())

  receiverTransferEvent.parameters = new Array()

  receiverTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  receiverTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receiverTransferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  receiverTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  receiverTransferEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return receiverTransferEvent
}

export function createRelayedReceiverMintEvent(
  to: Address,
  tokenId: BigInt,
  amount: BigInt,
  chainId: BigInt,
  timestamp: BigInt
): RelayedReceiverMint {
  let relayedReceiverMintEvent = changetype<RelayedReceiverMint>(newMockEvent())

  relayedReceiverMintEvent.parameters = new Array()

  relayedReceiverMintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  relayedReceiverMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  relayedReceiverMintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  relayedReceiverMintEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  relayedReceiverMintEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return relayedReceiverMintEvent
}

export function createReceivertokenTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): ReceivertokenTransferBatch {
  let receivertokenTransferBatchEvent = changetype<ReceivertokenTransferBatch>(
    newMockEvent()
  )

  receivertokenTransferBatchEvent.parameters = new Array()

  receivertokenTransferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  receivertokenTransferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  receivertokenTransferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receivertokenTransferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  receivertokenTransferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return receivertokenTransferBatchEvent
}

export function createReceivertokenTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): ReceivertokenTransferSingle {
  let receivertokenTransferSingleEvent = changetype<
    ReceivertokenTransferSingle
  >(newMockEvent())

  receivertokenTransferSingleEvent.parameters = new Array()

  receivertokenTransferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  receivertokenTransferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  receivertokenTransferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  receivertokenTransferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  receivertokenTransferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return receivertokenTransferSingleEvent
}

export function createReceivertokenURIEvent(
  value: string,
  id: BigInt
): ReceivertokenURI {
  let receivertokenUriEvent = changetype<ReceivertokenURI>(newMockEvent())

  receivertokenUriEvent.parameters = new Array()

  receivertokenUriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  receivertokenUriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return receivertokenUriEvent
}
