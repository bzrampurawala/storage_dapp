import Web3 from 'web3';
import {network, contractAddress} from '../../../config'
const ourStore = require('../../../../build/contracts/Store.json');
const web3 = new Web3(network);
const contract = new web3.eth.Contract(ourStore.abi,contractAddress);
const eth = {
    contract: contract,
    web3: web3
}
export default eth;