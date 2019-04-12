import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import { retrieveFiles } from './utils/retrieveFiles'
import FileHodler from './ui/fileHodler';
import {ipfsLocalUrl} from '../../config';
import {observer} from 'mobx-react';
import fileStore from './store'
import {transactionOptions} from './core/transactionOptions'
const app = document.getElementById('main');

let interval;

const accountInterval = ()=>setInterval(function() {
    if (fileStore.account && web3.eth.accounts[0] !== transactionOptions.from) location.reload() 
}, 500);

function connect () {
    if (typeof ethereum !== 'undefined') {
      ethereum.enable()
      .catch(console.error)
    }
}

const init = ()=>{
    fileStore.account = web3.eth.accounts[0]
    if(!web3.eth.accounts[0])connect()
    retrieveFiles()
    interval = accountInterval()
}

window.onload = init

@observer
class Main extends React.Component{

    componentWillUnmount(){
        clearInterval(interval)
    }
    render(){
        return(
                <div>
                    <AddButton/>
                    <div id = 'filesView'>
                        {fileStore.files.map((file, index)=>(<FileHodler key = {index} imageSrc={ipfsLocalUrl+file.hash}/>))}
                    </div>
                </div>
        
        )
    }
}
ReactDOM.render(<Main/>,app);

