import buffer from 'buffer';

import {contract} from './web3';
import ipfs from './ipfs';
import {transactionOptions} from '../utils/transactionOptions';
import { fileStructure, convertToEthereumSupportedDS } from '../utils';
import fileStore from '../store';

export const uploadFile = (file, props)=>{
  if(file === null || file === undefined){
      return
  }
  else{
    transactionOptions.from = fileStore.account
    const reader = new FileReader();
    reader.onloadend = function(){
        const buf = buffer.Buffer(reader.result);
        ipfs.add(buf,async (err, res)=>{
            file.hash = res[0].hash
            const finalFile = fileStructure(file.name, file.hash, file.type, file.size)
            const newDs = convertToEthereumSupportedDS(file)
            contract.methods.addFile(newDs.name, newDs.hash1, newDs.hash2, newDs.type, newDs.size).send(transactionOptions)
            .on('transactionHash', (hash) => {
                console.log(hash)
            })
            .on('receipt', (receipt) => {
                console.log(receipt)
                fileStore.files.push(finalFile)
                
            })
            .on('confirmation', (confirmationNumber, receipt) => {
                console.log(confirmationNumber,receipt)                
            })
            .on('error', console.error);
        })
    }
    reader.readAsArrayBuffer(file);
  }
}