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
            console.log(file)
            file.fileType  = file.type.split("/")[0]+"/"+file.name.split(".")[1]
            file.type.split("/")[0]
            const finalFile = fileStructure(file.name, file.hash, file.fileType, file.size)
            const newDs = convertToEthereumSupportedDS(file)
            contract.methods.addFile(newDs.name, newDs.hash1, newDs.hash2, newDs.type, newDs.size).send(transactionOptions)
            .on('transactionHash', console.log)
            .on('receipt', console.log)
            .on('confirmation', (confirmationNumber, receipt) => {
                console.log(confirmationNumber,receipt)
                if(confirmationNumber===1) fileStore.files.push(finalFile)         
            })
            .on('error', console.error);
        })
    }
    reader.readAsArrayBuffer(file);
  }
}