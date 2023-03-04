import ethers from 'ethers';
import dotenv from 'dotenv';
import stark from '@starkware-industries/starkware-crypto-utils';
import { perpAbi, erc20ABI, starkEXL1ABI } from './constant/starkperpABI.js';
import {
  depositL1,
  selfMintAndAllowance,
  deriveStarkKey,
} from './helper/helper.js';
import { StarkExApi } from './StarkExAPI/starkexApi.js';
import axios from 'axios';

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

//console.log(ethSignature.length);
let starKPvt = stark.keyDerivation.getPrivateKeyFromEthSignature(ethSignature);
//console.log(starKPvt);
// Derive Stark Key from Stark PvtKey

//--------
let starkKey = stark.keyDerivation.privateToStarkKey(starKPvt); //Doesn't work make an issue

//let starkKey = deriveStarkKey(stark, starKPvt);
//
//let sk = stark.keyDerivation.privateToStarkKey("3c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc");
// let sk = deriveStarkKey(stark,'3c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc');
// console.log(sk.toString(16));
//console.log(ethers.BigNumber.from(starkKey));
/**
 * Mint 10000 ERC20 tokens to current address
 */
const selfMintContract = new ethers.Contract(
  process.env.SELFMINT_ERC20,
  erc20ABI,
  wallet
);
await selfMintAndAllowance(
  selfMintContract,
  '10000000000000',
  process.env.STARKEX_L1_GOERLI
);
/**
 * Deposit 1 ETH to L1 contract.
 */
const starkEXL1 = new ethers.Contract(
  process.env.STARKEX_L1_GOERLI,
  perpAbi,
  wallet
);
let asset_id = '0xa21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f';
//console.log('286442224669982855773917167725901379555005478797788066723536016706544965407'.toString(16));
// const L1Deposit =await depositL1(
//   starkEXL1,
//   '0x'+starkKey,
//   '286442224669982855773917167725901379555005478797788066723536016706544965407',
//   '100000000',
//   10001
// );
let asset_type = '286442224669982855773917167725901379555005478797788066723536016706544965407';
//console.log('asset id?:','0x'+asset_type.toString(16))

   let tx_id =await StarkExApi.gateway.getFirstUnusedTxId();
    console.log(tx_id,'tx','0x'+starkKey);
  //await StarkExApi.gateway.depositRequest(tx_id,10001,'0x'+starkKey,'100000000');
  
    // let transfer_order= {
    //   "amount": "2000000",
    //   "expiration_timestamp": 438953,
    //   "nonce": 1,
    //   "target_public_key": "0x5fa3383597691ea9d827a79e1a4f0f7949435ced18ca9619de8ab97e661020",
    //   "target_vault_id": 101,
    //   "sender_vault_id": 111,
    //   "token": "0xa21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f",
    //   "signature": {
    //     "r": "0x735fffa9bf371ca294c5f74c15b434684cfe7e9e0500e6a59589ef05c1fce13",
    //     "s": "0x1ddc49993ad678e2b5b80fb0e22a077b136353514f60edc3c2fc77d59dbd93e"
    //   },
    //   "public_key": "0x59a543d42bcc9475917247fa7f136298bb385a6388c3df7309955fcb39b8dd4"
    // }
//    perpetualMsgs.getPerpetualTransferMessage("286442224669982855773917167725901379555005478797788066723536016706544965407"/*assetId*/, "0"/*assetIdFee*/, "2825868930652315540133093693348064822157481518754303749560050236804923333506"/*receiverPublicKey*/, "<insert position_id>"/*senderPositionId*/, "4"/*receiverPositionId*/, "<insert position_id>"/*srcFeePositionId*/, "0"/*nonce*/, "3"/*amount*/, "0"/*maxAmountFee*/, "20000000"/*expirationTimestamp*/)


   let msgHash = stark.getTransferMsgHashWithFee('200000',2,10001,asset_id,123,'0x5fa3383597691ea9d827a79e1a4f0f7949435ced18ca9619de8ab97e661020',438953,'0x3003a65651d3b9fb2eff934a4416db301afd112a8492aaf8d7297fc87dcd9f4','0','0');
   console.log(msgHash);
   const keyPair = stark.ec.keyFromPrivate(starKPvt, 'hex');
   const account = stark.ec.keyFromPublic(keyPair.getPublic(true, "hex"), "hex");
   console.log(account.pub.getX().toString(16),starkKey);
   let sig = stark.sign(keyPair, msgHash);
   let {r,s} = sig;
//Verify signature matches message and stark key.
//console.log(stark.verify(keyPair, msgHash, sig),r.toString(16),s.toString(16));


await StarkExApi.gateway.transfer(tx_id,asset_id,'200000',starkKey,'10001','0x'+r.toString(16),'0x'+s.toString(16));
//console.log(asset_id);
// axios
//         .post('https://perpetual-playground-v2.starkex.co/add_transaction',{
//             tx_id:tx_id,
//             tx:{
                
//                     amount: '2000000',
//                     asset_id: asset_id,
//                     expiration_timestamp: '20000',
//                     nonce: '1',
//                     receiver_position_id: '101',
//                     receiver_public_key: '0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b',
//                     sender_position_id: '111',
//                     sender_public_key: '0x'+starkKey,
//                     signature: {
//                         r: '0x'+r.toString(16),
//                         s: '0x'+s.toString(16)
//                     },
//                     type: "TRANSFER"
                
//             },
//         })
//         .then(function (response) {
//           //  console.log(response);
//           })
//           .catch(function (error) {
//             //console.log(error);
//           });
// const batchId = await StarkExApi.feederGateway.getLastBatchId();
// await StarkExApi.feederGateway.getBatchInfo(40);
// //0x0041e51af62d1a133c03691620777b9430c2d00c2d09b41bd36cafd23f5c56da
// console.log(batchId);
// axios
//   .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
//     tx_id: tx_id,
//     tx: {
//       position_id: '111',
//       public_key: '0x'+starkKey,
//       amount: '100000000',
//       type: 'DEPOSIT',
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });







// starkKey	uint256	2587867597115725164017062332945393781445735019102996832976163951690087003283
// 1	assetType	uint256	286442224669982855773917167725901379555005478797788066723536016706544965407
// 2	vaultId	uint256	1672877706576209
// 3	quantizedAmount	uint256	10000000

// [0]:  05b8ae6015780ff48ee5f7d444e3a4fb3d1821ed031e3ad561963f66d135f493
// [1]:  00a21edc9d9997b1b1956f542fe95922518a9e28ace11b7b2972a1974bf5971f
// [2]:  0000000000000000000000000000000000000000000000000005f17931740151
// [3]:  0000000000000000000000000000000000000000000000000000000000989680

//import axios from 'axios';

// axios
//   .get('https://perpetual-playground-v2.starkex.co/get_first_unused_tx_id')
//   .then(function (response) {
//     console.log('get_first_unused_tx_id : ', response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// axios
//   .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
//     tx_id: 116,
//     tx: {
//       position_id: '1672877706576420',
//       public_key:
//         '116426286008000944307409139386885614966914967113770466166284866523594774234',
//       // '2587867597115725164017062332945393781445735019102996832976163951690087003283',
//       amount: '100000000',
//       type: 'DEPOSIT',
//     },
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



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
