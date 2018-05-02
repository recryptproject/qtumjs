The RECRYPT JavaScript library for Smart Contract development.

See [documentation](https://recryptproject.github.io/recryptjs-doc/).

See [companion tutorial](https://github.com/recryptproject/recryptbook/blob/master/part2/erc20-js.md).

# Install

```
npm install recryptjs
```

This is a sample code snippet that transfer ERC20 tokens:

```js
import {
  RecryptRPC,
} from "recryptjs"

const repoData = require("./solar.json")
const recrypt = new Recrypt("http://recrypt:test@localhost:8489", repoData)

const myToken = recrypt.contract("zeppelin-solidity/contracts/token/CappedToken.sol")

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  await tx.confirm(3)
  console.log("transfer confirmed")
}
```

The [full source code](https://github.com/recryptproject/recryptbook-mytoken-recryptjs-cli).

> This example uses async/await (supported natively by Node 8+).

# Running Tests

```
docker run -it --rm \
  --name recryptjs \
  -v `pwd`:/dapp \
  -p 5889:8489 \
  hayeah/recryptportal
```

Enter into container:

```
docker exec -it recryptjs sh
```

Generate initial blocks:

```
qcli generate 600

qcli getbalance

2000000.00000000
```

Deploy test contracts:

```
sh deploy-test-contracts.sh
```

Build and run tests:

```
npm build
npm run test
```
