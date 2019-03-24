import eth from '../core/web3';
import ipfs from '../core/ipfs';
import { ethers } from 'ethers';
import transactionOptions from '../core/transactionOptions';

const retrieveFiles = {};
retrieveFiles.get = async ()=>{
    try{
        const files = [];
        let numberOfFiles = await eth.contract.methods.numberOfFiles().call(transactionOptions);
        while(numberOfFiles>0){
            numberOfFiles = numberOfFiles-1;
            console.log(numberOfFiles);
            const file = await eth.contract.methods.getFile(numberOfFiles).call(transactionOptions);
            const hexToString = eth.web3.utils.hexToString
            files.push({
                name: hexToString(file['0']),
                hash: hexToString(file['1']) + hexToString(file['2']),
                type: hexToString(file['3']),
                size: file['4']
            })
        }
        return files
        
    }
    catch(err){
        console.log("error while fetching files ",err)
    }
    
}
export default retrieveFiles