import {contract} from '../core/web3';
import {transactionOptions} from '../core/transactionOptions';
import { fileStructure } from '../utils'
import fileStore from '../store'
export const retrieveFiles = async ()=>{
    try{
        transactionOptions.from = fileStore.account
        let numberOfFiles = await contract.methods.numberOfFiles().call(transactionOptions);
        while(numberOfFiles>0){
            numberOfFiles = numberOfFiles-1;
            const file = await contract.methods.getFile(numberOfFiles).call(transactionOptions);
            const hexToString = web3.toUtf8
            const finalFile = fileStructure(
                hexToString(file['0']),
                hexToString(file['1']) + hexToString(file['2']),
                hexToString(file['3']),
                file['4'])
            fileStore.files.push(finalFile)
        }
        
    }
    catch(err){
        console.log("error while fetching files ",err)
    }
    
}