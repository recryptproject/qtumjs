import { assert } from "chai"

import { RecryptRPC } from "../RecryptRPC"

export const rpcURL = "http://recrypt:test@localhost:5889"

export const rpc = new RecryptRPC(rpcURL)

export const repoData = require("../../solar.development.json")

export async function assertThrow(
  fn: () => Promise<any>,
  msg?: string,
  report?: (err: any) => void,
) {
  let errorThrown: any = null

  try {
    await fn()
  } catch (err) {
    errorThrown = err
  }

  // assert.erro
  if (errorThrown && report) {
    report(errorThrown)
  }

  assert(errorThrown != null, msg ? `Expects error to be thrown: ${msg}` : "Expects error to be thrown")

  // assert.isNotNull(errorThrown, )
}
