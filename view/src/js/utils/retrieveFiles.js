import eth from '../core/web3';
import ipfs from '../core/ipfs';
import transactionOptions from '../core/transactionOptions'

const retrieveFiles = {};
retrieveFiles.get = async ()=>{
    console.log(transactionOptions)
    eth.contract.methods.numberOfFiles().call(transactionOptions)
    .then(reciept=>console.log(reciept))
    .catch(err=>console.log(err))
    // console.log(numberOfFiles)
}
export default retrieveFiles