const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' });
const file = {};
file.upload = file=>{
    const finalFileObject = {};
    console.log(file);
    const reader = new FileReader();
        reader.onloadend = function(){
            const buf = buffer.Buffer(reader.result);
            ipfs.add(buf,(err, res)=>{
                console.log(res);
            })
        }
    // reader.readAsArrayBuffer(files[0]);
}

module.exports = file;