import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import "@babel/polyfill"
import retrieveFiles from './utils/retrieveFiles';  
import FileHodler from './ui/fileHodler';
import {ipfsUrl} from '../../config';
const app = document.getElementById('main');
class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            imageUrl:[]
        }
    }
    componentDidMount(){
        this.loadFiles()
    }
    async loadFiles(){
        const files = await retrieveFiles.get()
        if(files != null && files.length>0){
            const imageUrl = []
            files.map(file=>{
                imageUrl.push(ipfsUrl+file.hash)
            })
            this.setState({
                imageUrl: imageUrl
            })
        }
        else
            console.log('there might not be any files associated with the this address')   
    }
    
    render(){
        return(
        <div id = 'index'>
           <AddButton/>
           <div>
                {this.state.imageUrl.map(url=>(<FileHodler imageSrc={url}/>))}
           </div>
        </div>
        )
    }
}
ReactDOM.render(<Main/>,app);