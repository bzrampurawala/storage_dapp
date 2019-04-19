import { ethers } from 'ethers';

export const fileStructure = (name, hash, type, size)=>{
    return{
        name: name,
        hash: hash,
        fileType: type,
        size: size

    }
}

export const convertToEthereumSupportedDS = fileData=>{
    const newDS = {}
    const hash = fileData.hash;
    const hashSize = hash.length;
    const middleOfHash = Math.floor(hashSize/2);
    const hash1 = hash.substr(0, middleOfHash);
    const hash2 = hash.substr(middleOfHash);
    const converToByte32 = ethers.utils.formatBytes32String;
    newDS.name = converToByte32(fileData.name);
    newDS.type =  converToByte32(fileData.fileType);
    newDS.size = fileData.size;
    newDS.hash1 =  converToByte32(hash1);
    newDS.hash2 = converToByte32(hash2);
    return newDS
}