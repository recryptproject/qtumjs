import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Recrypt } from "./Recrypt"
import { Contract } from "./Contract"

describe("Recrypt", () => {
  const recrypt = new Recrypt(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = recrypt.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      recrypt.contract("test/contracts/Unknown.sol")
    })
  })
})
