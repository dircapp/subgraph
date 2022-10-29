import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ReceivertokenApprovalForAll } from "../generated/schema"
import { ReceivertokenApprovalForAll as ReceivertokenApprovalForAllEvent } from "../generated/Receivertoken/Receivertoken"
import { handleReceivertokenApprovalForAll } from "../src/receivertoken"
import { createReceivertokenApprovalForAllEvent } from "./receivertoken-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let operator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let approved = "boolean Not implemented"
    let newReceivertokenApprovalForAllEvent = createReceivertokenApprovalForAllEvent(
      account,
      operator,
      approved
    )
    handleReceivertokenApprovalForAll(newReceivertokenApprovalForAllEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ReceivertokenApprovalForAll created and stored", () => {
    assert.entityCount("ReceivertokenApprovalForAll", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ReceivertokenApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ReceivertokenApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "operator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ReceivertokenApprovalForAll",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approved",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
