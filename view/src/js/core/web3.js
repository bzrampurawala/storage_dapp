import Web3 from 'web3';
import {networkRopsten, contractAddress} from '../../../config'
const ourStore = require('../../../../build/contracts/Store.json');
export const web3 = new Web3(networkRopsten);
export const contract = new web3.eth.Contract(ourStore.abi,contractAddress);