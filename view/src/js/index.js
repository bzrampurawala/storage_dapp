import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import { retrieveFiles } from './core/retrieveFiles'
import FileHodler from './ui/fileHodler';
import {ipfsLocalUrl} from '../../config';
import {observer} from 'mobx-react';
import fileStore from './store'
const app = document.getElementById('main');

let interval;

const accountInterval = ()=>setInterval(function() {
    if (fileStore.account !== web3.eth.accounts[0]) location.reload() 
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
    componentDidMount(){
        console.log(web3.eth.accounts[0])
    }
    render(){
        return(
                <div>
                    <AddButton/>
                    <div id = 'filesView'>
                        {fileStore.files.map((file, index)=>{
                            let src;
                            const type = file.type.split('/')[1]
                            const path = "/src/assests/images/"
                            if(type === "jpeg" || type === "png") src = ipfsLocalUrl+file.hash
                            else if(type === "pdf") src = path+ `${type}.png`
                            else if(type === "mp3" || type === "mp4" ) src = path+ `${type}.png`
                            else if(type === "docx") src = path+ `${type}.png`
                            else src = path + `${any}.png`
                            return(<FileHodler key = {index} index = {index} imageSrc={src} name = {file.name} href = {ipfsLocalUrl+file.hash}/>)
                        })}
                    </div>
                </div>
        
        )
    }
}
ReactDOM.render(<Main/>,app);

