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
            position_id: vault_id,
            public_key:
                starkKey,
            // '2587867597115725164017062332945393781445735019102996832976163951690087003283',
            amount: amount,
            type: 'DEPOSIT',
            },
        })
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
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

