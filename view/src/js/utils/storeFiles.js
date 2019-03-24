import buffer from 'buffer';

import eth from '../core/web3';
import ipfs from '../core/ipfs';
import transactionOptions from '../core/transactionOptions';
import { ethers } from 'ethers';

const fileObject = {};
fileObject.upload = file=>{
  if(file === null || file === undefined){
      return
  }
  else{
    const reader = new FileReader();
    reader.onloadend = function(){
        const buf = buffer.Buffer(reader.result);
        ipfs.add(buf,async (err, res)=>{
            
            const hash = res[0].hash;
            const hashSize = hash.length;
            const middleOfHash = Math.floor(hashSize/2);
            const hash1 = hash.substr(0, middleOfHash);
            const hash2 = hash.substr(middleOfHash+1);
            const converToByte32 = ethers.utils.formatBytes32String;
            const nameByte32 = converToByte32(file.name);
            const typeByte32 =  converToByte32(file.type);
            const sizeByte32 = converToByte32(file.size);
            const hash1Byte32 =  converToByte32(hash1);
            const hash2Byte32 = converToByte32(hash2);
            if(transactionOptions.from==null){
                alert("download metamask");
                return;
            }
            eth.contract.methods.addFile(nameByte32, hash1Byte32, hash2Byte32, typeByte32, sizeByte32).send(transactionOptions)
            .on('transactionHash', (hash) => {
                console.log(hash)
            })
            .on('receipt', (receipt) => {
                console.log(receipt)
                
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

export default fileObject;