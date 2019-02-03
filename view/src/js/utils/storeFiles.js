import buffer from 'buffer';
import web3 from '../core/web3';
import ipfs from '../core/ipfs';


const fileObject = {};
fileObject.upload = file=>{
    const reader = new FileReader();
        reader.onloadend = function(){
            const buf = buffer.Buffer(reader.result);
            ipfs.add(buf,(err, res)=>{
                file.hash = res.hash;
                
            })
        }
    reader.readAsArrayBuffer(file);
}

export default fileObject;