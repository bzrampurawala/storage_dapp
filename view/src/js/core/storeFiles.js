const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient();
const file = {};
file.upload = file=>{
    console.log(file)
    ipfs.add(file,(err, res)=>{
        console.log(err)
        console.log(res);
    })
}

module.exports = file;