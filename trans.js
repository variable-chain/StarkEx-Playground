import starkwareCrypto from '@starkware-industries/starkware-crypto-utils';
import axios from 'axios';

dotenv.config();
import dotenv from 'dotenv';

let privateKey = process.env.PVT_KEY;
// let provider = new ethers.providers.getDefaultProvider(
//   process.env.GOERLI_RPC_URL
// );

// var wallet = new ethers.Wallet(privateKey, provider);

// console.log('Balance: ' + (await wallet.getBalance()));
// console.log('Address: ' + wallet.address);

const keyPair = starkwareCrypto.ec.keyFromPrivate(privateKey, 'hex');
const publicKey = starkwareCrypto.ec.keyFromPublic(
  keyPair.getPublic(true, 'hex'),
  'hex'
);
const publicKeyX = publicKey.pub.getX();
// console.log(' publicKeyX', publicKeyX);

console.log(' publicKeyX.toString(16)', publicKeyX.toString(16));
// const msgHash = starkwareCrypto.getTransferMsgHash(
//   amount: 3, // - amount (uint63 decimal str)
//   nonce, // - nonce (uint31)
//   sender_vault_id, // - sender_vault_id (uint31)
//   token, // - token (hex str with 0x prefix < prime)
//   target_vault_id, // - target_vault_id (uint31)
//   target_public_key, // - target_public_key (hex str with 0x prefix < prime)
//   expiration_timestamp // - expiration_timestamp (uint22)
// // );
// amount,
// nonce,
// senderVaultId,
// token,
// receiverVaultId,
// receiverPublicKey,
// expirationTimestamp,

const receiverPublicKey =
  '0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b';

// let msgHash = stark.getTransferMsgHash('2000000',
// '1',
// '111',
// asset_id,
// '101',
// '0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b',
// '2000000');

const msgHash = starkwareCrypto.getTransferMsgHash(
  '3',
  '1',
  '1672877706576209',
  '0x00a21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f',
  '21',
  '0x' + receiverPublicKey.toString(16),
  '10000'
);

const msgSignature = starkwareCrypto.sign(keyPair, msgHash);
const { r, s } = msgSignature;

console.log('r : ', r.toString());
console.log('s : ', s.toString());

// {
//   "amount": "7758176404715800194",
//   "asset_id": "0x57d05d11b570fd197b55746070ee051c731ee109b07255eab3c9cf8b6c579d",
//   "expiration_timestamp": "2404381470",
//   "nonce": "2195908194",
//   "receiver_position_id": "6091063652223914538",
//   "receiver_public_key": "0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b",
//   "sender_position_id": "9309829342914403545",
//   "sender_public_key": "0x5f0920db9269a60c8f57fd4fa7fa33ad06712a12742f016ea769bad255e941a",
//   "signature": {
//       "r": "0x72bed480f4a1a7617c2f43d9a33d87f2d6bdd6164ee624f8089aec9d7e1dfd2",
//       "s": "0x5f0829529a16842f9f0c9d64ad61985ece414cbd4da67c2e782c9b7747183d7"
//   },
//   "type": "TRANSFER"
// }
// "transfer_order": {
//   "amount": "2154549703648910716",
//   "expiration_timestamp": 438953,
//   "nonce": 1,
//   "target_public_key": "0x5fa3383597691ea9d827a79e1a4f0f7949435ced18ca9619de8ab97e661020",
//   "target_vault_id": 21,
//   "sender_vault_id": 34,
//   "token": "0x3003a65651d3b9fb2eff934a4416db301afd112a8492aaf8d7297fc87dcd9f4",
//   "signature": {
//     "r": "0x735fffa9bf371ca294c5f74c15b434684cfe7e9e0500e6a59589ef05c1fce13",
//     "s": "0x1ddc49993ad678e2b5b80fb0e22a077b136353514f60edc3c2fc77d59dbd93e"
//   },
//   "public_key": "0x59a543d42bcc9475917247fa7f136298bb385a6388c3df7309955fcb39b8dd4"
// }
// axios
//   .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
//     tx_id: 200,
//     tx: {
//       // public_key: '0x' + publicKeyX.toString(16),
//       amount: '3',
//       expiration_timestamp: 438953,
//       nonce: 1,
//       receiver_position_id: 21,
//       sender_position_id: 1672877706576209,
//       receiver_public_key:
//         '0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b',

//       asset_id:
//         '0x00a21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f',
//       sender_public_key: '0x' + publicKeyX.toString(16),
//       signature: {
//         r: '0x' + r.toString(16),
//         s: '0x' + s.toString(16),
//       },
//       type: 'TRANSFER',
//     },
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
