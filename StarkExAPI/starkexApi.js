//import StarkExAPI from '@starkware-industries/starkex-js';
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export const StarkExApi = {
gateway:{
  getFirstUnusedTxId : async ()=>{

    return axios
    .get('https://perpetual-playground-v2.starkex.co/get_first_unused_tx_id')
    .then(function (response) {
        console.log('get_first_unused_tx_id : ', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    },

    depositRequest : async (txId,vault_id,starkKey,amount)=>{
        console.log('Deposit REQ:',txId,vault_id,starkKey,amount);
        return axios
        .post('https://perpetual-playground-v2.starkex.co/add_transaction', {
          tx_id: txId,
          tx: {
            position_id: vault_id.toString(),
            public_key: '0x'+starkKey,
            amount: amount,
            type: 'DEPOSIT',
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    transfer: async (txId,asset_id,amount,starkKey,sVaultId,r,s)=>{
        return axios
        .post('https://perpetual-playground-v2.starkex.co/add_transaction',{
            tx_id:txId,
            tx:{
                
                    amount: amount,
                    asset_id: asset_id,
                    expiration_timestamp: "2000000",
                    nonce: "1",
                    receiver_position_id: "101",
                    receiver_public_key: "0x259f432e6f4590b9a164106cf6a659eb4862b21fb97d43588561712e8e5216b",
                    sender_position_id: sVaultId,
                    sender_public_key: '0x'+starkKey,
                    signature: {
                        r: r,
                        s: s
                    },
                    type: "TRANSFER"
                
            },
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
},

feederGateway:{
    getLastBatchId:async () =>{
    return axios
        .get(
            'https://perpetual-playground-v2.starkex.co/feeder_gateway/get_last_batch_id'
        )
        .then(function (response) {
            console.log('last batch id : ', response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    getBatchInfo: async (batch_id)=>{
        return axios
        .get(
            'https://perpetual-playground-v2.starkex.co/feeder_gateway/get_batch_info?batch_id='+batch_id.toString()
        )
        .then(function (response) {
            console.log('batch id : ', response.data);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    },


}
}

