import ethers from 'ethers';
import dotenv from 'dotenv';
import stark from '@starkware-industries/starkware-crypto-utils';
import { perpAbi, erc20ABI, starkEXL1ABI } from './constant/starkperpABI.js';
import {
  depositL1,
  selfMintAndAllowance,
  deriveStarkKey,
} from './helper/helper.js';
dotenv.config();

let privateKey = process.env.PVT_KEY;
let provider = new ethers.providers.getDefaultProvider(
  process.env.GOERLI_RPC_URL
);
//let randomWallet = ethers.Wallet.createRandom();
//let provider = ethersjs.getDefaultProvider();

//import { ListData } from "../../components/Data/Data";
//let wallet = randomWallet.connect(provider);
var wallet = new ethers.Wallet(privateKey, provider);

console.log('Balance: ' + (await wallet.getBalance()));
console.log('Address: ' + wallet.address);
/**
 * EIP 712 Signature
 */
const domain = {
  name: 'VarEx',
  version: '1',
  chainId: 5,
  verifyingContract: '0x1111111111111111111111111111111111111111',
};
const types = {
  Message: [
    { name: 'from', type: 'Person' },
    { name: 'content', type: 'string' },
  ],
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' },
  ],
};
const mail = {
  from: {
    name: 'Alice',
    wallet: wallet.address,
  },
  content: 'Gm! You are about to sign message to derive generate Stark Key',
};

const ethSignature = await wallet._signTypedData(domain, types, mail);

console.log('ethSignature : ', ethSignature);
const expectedSignerAddress = wallet.address;
const recoveredAddress = ethers.utils.verifyTypedData(
  domain,
  types,
  mail,
  ethSignature
);
console.log(recoveredAddress === expectedSignerAddress);

/**
 * Generate Stark-Key Pair
 */

console.log(ethSignature.length);
let starKPvt = stark.keyDerivation.getPrivateKeyFromEthSignature(ethSignature);
//console.log(starKPvt);
// Derive Stark Key from Stark PvtKey

//--------
//let starkKey = stark.keyDerivation.privateToStarkKey(starKPvt); //Doesn't work make an issue

let starkKey = deriveStarkKey(stark, starKPvt);
//
//let sk = stark.keyDerivation.privateToStarkKey("3c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc")
//console.log(ethers.BigNumber.from(starkKey));
/**
 * Mint 10000 ERC20 tokens to current address
 */
const selfMintContract = new ethers.Contract(
  process.env.SELFMINT_ERC20,
  erc20ABI,
  wallet
);
// await selfMintAndAllowance(
//   selfMintContract,
//   '10000000000000',
//   process.env.STARKEX_L1_GOERLI
// );
/**
 * Deposit 1 ETH to L1 contract.
 */
const starkEXL1 = new ethers.Contract(
  process.env.STARKEX_L1_GOERLI,
  perpAbi,
  wallet
);

// await depositL1(
//   starkEXL1,
//   starkKey,
//   '286442224669982855773917167725901379555005478797788066723536016706544965407',
//   '10000000',
//   1672877706576209
// );

// starkKey	uint256	2587867597115725164017062332945393781445735019102996832976163951690087003283
// 1	assetType	uint256	286442224669982855773917167725901379555005478797788066723536016706544965407
// 2	vaultId	uint256	1672877706576209
// 3	quantizedAmount	uint256	10000000

// [0]:  05b8ae6015780ff48ee5f7d444e3a4fb3d1821ed031e3ad561963f66d135f493
// [1]:  00a21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f
// [2]:  0000000000000000000000000000000000000000000000000005f17931740151
// [3]:  0000000000000000000000000000000000000000000000000000000000989680

import axios from 'axios';

axios
  .get('https://perpetual-playground-v2.starkex.co/get_first_unused_tx_id')
  .then(function (response) {
    console.log('get_first_unused_tx_id : ', response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
    tx_id: 200,
    tx: {
      position_id: '1672877706576209',
      public_key:
        '0x05b8ae6015780ff48ee5f7d444e3a4fb3d1821ed031e3ad561963f66d135f493',
      // '2587867597115725164017062332945393781445735019102996832976163951690087003283',
      amount: '10000000',
      type: 'DEPOSIT',
    },
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .get(
    'https://perpetual-playground-v2.starkex.co/feeder_gateway/get_last_batch_id'
  )
  .then(function (response) {
    console.log('last batch id : ', response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .get(
    'https://perpetual-playground-v2.starkex.co/feeder_gateway/get_batch_info?batch_id=34'
  )
  .then(function (response) {
    console.log('34 batch id : ', response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .post(
    'https://perpetual-playground-v2.starkex.co/feeder_gateway/get_batch_info?batch_id=33'
  )
  .then(function (response) {
    console.log('33 batch id : ', response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// // {
// //   "amount": "7758176404715800194",
// //   "asset_id": "0x57d05d11b570fd197b55746070ee051c731ee109b07255eab3c9cf8b6c579d",
// //   "expiration_timestamp": "2404381470",
// //   "nonce": "2195908194",
// //   "receiver_position_id": "6091063652223914538",
// //   "receiver_public_key": "0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b",
// //   "sender_position_id": "9309829342914403545",
// //   "sender_public_key": "0x5f0920db9269a60c8f57fd4fa7fa33ad06712a12742f016ea769bad255e941a",
// //   "signature": {
// //       "r": "0x72bed480f4a1a7617c2f43d9a33d87f2d6bdd6164ee624f8089aec9d7e1dfd2",
// //       "s": "0x5f0829529a16842f9f0c9d64ad61985ece414cbd4da67c2e782c9b7747183d7"
// //   },
// //   "type": "TRANSFER"

// // axios
// //   .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
// //     tx_id: 200,
// //     tx: {
// //       // position_id: '1672877706576209',
// //       public_key:
// //         '0x05b8ae6015780ff48ee5f7d444e3a4fb3d1821ed031e3ad561963f66d135f493',
// //       // '2587867597115725164017062332945393781445735019102996832976163951690087003283',
// //       // amount: '10000000',

// //       amount: '3',
// //       asset_id:
// //         '0xa21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f',
// //       expiration_timestamp: '20000000',
// //       nonce: '0',
// //       receiver_position_id: '4',
// //       receiver_public_key:
// //         '0x63f62982fa598ad7c4e469870b3a1c23316ba8fb717aa2b1ee3114283fb1b82',
// //       sender_position_id: '1672877706576209',
// //       sender_public_key: starkKey,

// //       signature: { r: '<your r>', s: '<your s>' },
// //       type: 'TRANSFER',
// //     },
// //   })
// //   .then(function (response) {
// //     console.log(response.data);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });

// axios
//   .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
//     tx_id: 200,
//     tx: {
//       // position_id: '1672877706576209',
//       public_key:
//         '0x59a543d42bcc9475917247fa7f136298bb385a6388c3df7309955fcb39b8dd4',
//       // '0x05b8ae6015780ff48ee5f7d444e3a4fb3d1821ed031e3ad561963f66d135f493',
//       // '2587867597115725164017062332945393781445735019102996832976163951690087003283',
//       // amount: '10000000',

//       amount: '3',
//       asset_id:
//         '0xa21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f',
//       expiration_timestamp: '438953',
//       nonce: '1',
//       receiver_position_id: '34',
//       receiver_public_key:
//         '0x5fa3383597691ea9d827a79e1a4f0f7949435ced18ca9619de8ab97e661020',
//       sender_position_id: '21',
//       sender_public_key: 0x59a543d42bcc9475917247fa7f136298bb385a6388c3df7309955fcb39b8dd4,

//       // signature: { r: '<your r>', s: '<your s>' },
//       signature: {
//         r: '0x735fffa9bf371ca294c5f74c15b434684cfe7e9e0500e6a59589ef05c1fce13',
//         s: '0x1ddc49993ad678e2b5b80fb0e22a077b136353514f60edc3c2fc77d59dbd93e',
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
