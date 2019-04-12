import {contractAddressRoptenTestnet} from '../../../config'
import Web3 from 'web3'
const ourStore = require('../../../../build/contracts/Store.json');
export const web3js = new Web3(web3.currentProvider)
export const contract = new web3js.eth.Contract(ourStore.abi,contractAddressRoptenTestnet);