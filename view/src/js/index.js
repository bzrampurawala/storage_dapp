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

function connect () {
    if (typeof ethereum !== 'undefined') {
      ethereum.enable()
      .catch(console.error)
    }
}
const accountInterval = ()=>setInterval(function() {
    if (web3.eth.accounts[0] !== transactionOptions.from) location.reload() 
}, 500);

@observer
class Main extends React.Component{
    interval
    componentDidMount(){
        if(!transactionOptions.from)connect()
        retrieveFiles()
        this.interval = accountInterval()
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
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