import eth from '../core/web3';
import ipfs from '../core/ipfs';
import transactionOptions from '../core/transactionOptions'

const retrieveFiles = {};
retrieveFiles.get = async ()=>{
    try{
        const files = [];
        let numberOfFiles = await eth.contract.methods.numberOfFiles().call(transactionOptions);
        while(numberOfFiles>0){
            numberOfFiles = numberOfFiles-1;
            console.log(numberOfFiles)
            files.push(await eth.contract.methods.getFile(numberOfFiles).call(transactionOptions))
        }
        console.log(files)
    }
    catch(err){
        console.log("error while fetching files ",err)
    }
    
}
export default retrieveFiles