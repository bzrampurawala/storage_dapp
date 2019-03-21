import buffer from 'buffer';

import eth from '../core/web3';
import ipfs from '../core/ipfs';
import transactionOptions from '../core/transactionOptions';

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
            const fromAscii = eth.web3.utils.fromAscii;
            const padd = eth.web3.eth.abi.encodeParameter.bind(eth.web3.eth.abi);
            const name = padd("bytes",fromAscii(file.name)).substr(0,66);
            const type =  padd("bytes",fromAscii(file.type)).substr(0,66);
            const size =  padd("bytes",fromAscii(file.size)).substr(0,66);
            const hash =  padd("bytes",fromAscii(res[0].hash)).substr(0,66);
            if(transactionOptions.from==null){
                alert("download metamask");
                return;
            }
            eth.contract.methods.addFile(name, hash, type, size).send(transactionOptions)
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