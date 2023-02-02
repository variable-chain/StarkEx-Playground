import ethers from 'ethers';
import dotenv from 'dotenv';
import stark from '@starkware-industries/starkware-crypto-utils';
import {perpAbi,erc20ABI,starkEXL1ABI} from './constant/starkperpABI.js';
import {depositL1,selfMintAndAllowance,deriveStarkKey} from './helper/helper.js';
dotenv.config();

let privateKey = process.env.PVT_KEY;
let provider = new ethers.providers.getDefaultProvider(process.env.GOERLI_RPC_URL);
//let randomWallet = ethers.Wallet.createRandom();
//let provider = ethersjs.getDefaultProvider();

//import { ListData } from "../../components/Data/Data";
//let wallet = randomWallet.connect(provider);
var wallet = new ethers.Wallet(privateKey, provider);

console.log("Balance: " + await wallet.getBalance());
/**
 * EIP 712 Signature
 */
const domain = {
    name: 'VarEx',
    version: '1',
    chainId: 5,
    verifyingContract: '0x1111111111111111111111111111111111111111'
  };
  const types = {
    Message: [
      { name: 'from', type: 'Person' },
      { name: 'content', type: 'string' }
    ],
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' }
    ]
  };
  const mail = {
    from: {
       name: 'Alice',
       wallet: wallet.address
    },
    content: 'Gm! You are about to sign message to derive generate Stark Key'
  };
  
  
  const ethSignature = await wallet._signTypedData(domain, types, mail);
  const expectedSignerAddress = wallet.address;
  const recoveredAddress = ethers.utils.verifyTypedData(domain, types, mail, ethSignature);
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

let starkKey = deriveStarkKey(stark,starKPvt);
//
//let sk = stark.keyDerivation.privateToStarkKey("3c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc")
//console.log(ethers.BigNumber.from(starkKey));
/**
 * Mint 10000 ERC20 tokens to current address
 */
const selfMintContract = new ethers.Contract( process.env.SELFMINT_ERC20 , erc20ABI , wallet );
//await selfMintAndAllowance(selfMintContract,'10000000000000',process.env.STARKEX_L1_GOERLI);
/**
 * Deposit 1 ETH to L1 contract.
 */
const starkEXL1 = new ethers.Contract( process.env.STARKEX_L1_GOERLI , perpAbi , wallet );

await depositL1(starkEXL1,starkKey,'286442224669982855773917167725901379555005478797788066723536016706544965407','10000000',1672877706576209);



