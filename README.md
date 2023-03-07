# StarkEx-Playground
Repo to play with StarkEx Perp Playground.

How to run?

1. Copy .env.local into .env and enter your PVT Key.
2. Enter the command: node index.js
3. Comment out certain code statement if needed.

✅ Get ETHSignature by Signning Eth Message.

✅ Generate Stark_Pvt key From  ETHSignature.

✅ Derive Stark Key.

✅ Desposit L1 Token to StarkEx L1 Contract.

```
  const L1Deposit =await depositL1(
  starkEXL1,
  '0x'+starkKey,
  '286442224669982855773917167725901379555005478797788066723536016706544965407',
  '100000000',
  10001
);
```

✅ Desposit Request Starkex Endpoint Call.
```
/**
 * DEPOSIT REQUEST.
 */
  await StarkExApi.gateway.depositRequest(tx_id,10001,'0x'+starkKey,'100000000');
```


