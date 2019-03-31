import eth from '../core/web3';
import transactionOptions from '../core/transactionOptions';
import { fileStructure } from '../utils'
import store from '../store'
export const retrieveFiles = async ()=>{
    try{
        let numberOfFiles = await eth.contract.methods.numberOfFiles().call(transactionOptions);
        while(numberOfFiles>0){
            numberOfFiles = numberOfFiles-1;
            const file = await eth.contract.methods.getFile(numberOfFiles).call(transactionOptions);
            const hexToString = eth.web3.utils.hexToString
            const finalFile = fileStructure(
                hexToString(file['0']),
                hexToString(file['1']) + hexToString(file['2']),
                hexToString(file['3']),
                file['4'])
            store.files.push(finalFile)
        }
        
    }
    catch(err){
        console.log("error while fetching files ",err)
    }
    
}