import Web3 from 'web3';
const ourStore = require('../../../../build/contracts/Store.json');
const web3 = new Web3('ws://localhost:7545');
const contract = new web3.eth.Contract(ourStore.abi,'0x53f275eb0ce03B20B7708F66881469977cc8B191');
console.log(contract)
export default web3;