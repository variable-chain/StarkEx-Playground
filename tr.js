import starkwareCrypto from '@starkware-industries/starkware-crypto-utils';
// const testData = './test/config/signature_test_data.json';
import { readFile } from 'fs/promises';
import assert from 'assert';

const testData = JSON.parse(
  await readFile(
    new URL('./test/config/signature_test_data.json', import.meta.url)
  )
);

// console.log(testData);
const privateKey = testData.meta_data.party_a_order.private_key.substring(2);
const keyPair = starkwareCrypto.ec.keyFromPrivate(privateKey, 'hex');
const publicKey = starkwareCrypto.ec.keyFromPublic(
  keyPair.getPublic(true, 'hex'),
  'hex'
);
const publicKeyX = publicKey.pub.getX();

assert(
  publicKeyX.toString(16) ===
    testData.settlement.party_a_order.public_key.substring(2),
  `Got: ${publicKeyX.toString(16)}.
        Expected: ${testData.settlement.party_a_order.public_key.substring(2)}`
);

// const { party_a_order: partyAOrder } = testData.settlement;
// const msgHash = starkwareCrypto.getLimitOrderMsgHash(
//   partyAOrder.vault_id_sell, // - vault_sell (uint31)
//   partyAOrder.vault_id_buy, // - vault_buy (uint31)
//   partyAOrder.amount_sell, // - amount_sell (uint63 decimal str)
//   partyAOrder.amount_buy, // - amount_buy (uint63 decimal str)
//   partyAOrder.token_sell, // - token_sell (hex str with 0x prefix < prime)
//   partyAOrder.token_buy, // - token_buy (hex str with 0x prefix < prime)
//   partyAOrder.nonce, // - nonce (uint31)
//   partyAOrder.expiration_timestamp // - expiration_timestamp (uint22)
// );

// assert(
//   msgHash === testData.meta_data.party_a_order.message_hash.substring(2),
//   `Got: ${msgHash}. Expected: ` +
//     testData.meta_data.party_a_order.message_hash.substring(2)
// );

// const msgSignature = starkwareCrypto.sign(keyPair, msgHash);
// const { r, s } = msgSignature;

// assert(starkwareCrypto.verify(publicKey, msgHash, msgSignature));
// assert(
//   r.toString(16) === partyAOrder.signature.r.substring(2),
//   `Got: ${r.toString(16)}. Expected: ${partyAOrder.signature.r.substring(2)}`
// );
// assert(
//   s.toString(16) === partyAOrder.signature.s.substring(2),
//   `Got: ${s.toString(16)}. Expected: ${partyAOrder.signature.s.substring(2)}`
// );

// // The following is the JSON representation of an order:
// console.log('Order JSON representation: ');
// console.log(partyAOrder);
// console.log('\n');

const transfer = testData.transfer_order;
const msgHash = starkwareCrypto.getTransferMsgHash(
  transfer.amount, // - amount (uint63 decimal str)
  transfer.nonce, // - nonce (uint31)
  transfer.sender_vault_id, // - sender_vault_id (uint31)
  transfer.token, // - token (hex str with 0x prefix < prime)
  transfer.target_vault_id, // - target_vault_id (uint31)
  transfer.target_public_key, // - target_public_key (hex str with 0x prefix < prime)
  transfer.expiration_timestamp // - expiration_timestamp (uint22)
);

assert(
  msgHash === testData.meta_data.transfer_order.message_hash.substring(2),
  `Got: ${msgHash}. Expected: ` +
    testData.meta_data.transfer_order.message_hash.substring(2)
);

// The following is the JSON representation of a transfer:
console.log('Transfer JSON representation: ');
console.log(transfer);
console.log('\n');
