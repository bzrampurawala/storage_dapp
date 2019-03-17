import buffer from 'buffer';
import {AbiCoder} from 'web3-eth-abi';

import eth from '../core/web3';
import ipfs from '../core/ipfs';

const fileObject = {};
fileObject.upload = file=>{
  if(file === null || file === undefined){
      return
  }
  else{
    const reader = new FileReader();
    const abiCoder = new AbiCoder();
    reader.onloadend = function(){
        const buf = buffer.Buffer(reader.result);
        ipfs.add(buf,async (err, res)=>{
            const fromAscii = eth.web3.utils.fromAscii;
            const padd = eth.web3.eth.abi.encodeParameter.bind(eth.web3.eth.abi);
            const name = padd("bytes",fromAscii(file.name)).substr(0,66);
            const type =  padd("bytes",fromAscii(file.type)).substr(0,66);
            const size =  padd("bytes",fromAscii(file.size)).substr(0,66);
            const hash =  padd("bytes",fromAscii(res[0].hash)).substr(0,66);
            const accounts = window.web3.eth.accounts;
            if(accounts==null){
                alert("download metamask");
                return;
            }
            const x = eth.contract.methods.addFile(name, hash, type, size).send({from: accounts[0]},(error, result)=>{
                if(error) console.log(error)
                else console.log(result)
            });
            x.sendTransaction({},(error, result)=>{
                if(error) console.log(error)
                else console.log(result)
            });
        })
    }
    reader.readAsArrayBuffer(file);
  }
}

export default fileObject;