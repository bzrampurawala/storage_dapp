import { contract } from './web3';
import { convertToEthereumSupportedDS } from '../utils'
import {transactionOptions} from '../utils/transactionOptions';
import fileStore from '../store';
export const shareFile = async (index, to)=>{
    const file = fileStore.files.slice()[index]
    transactionOptions.from = fileStore.account
    const newDs = convertToEthereumSupportedDS(file)
    contract.methods.shareFile(to ,newDs.name, newDs.hash1, newDs.hash2, newDs.type, newDs.size).send(transactionOptions)
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
}