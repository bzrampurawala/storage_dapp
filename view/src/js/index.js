import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import { retrieveFiles } from './utils/retrieveFiles'
import FileHodler from './ui/fileHodler';
import {ipfsUrl} from '../../config';
import {observer} from 'mobx-react';
import fileStore from './store'
const app = document.getElementById('main');
@observer
class Main extends React.Component{

    componentDidMount(){
        retrieveFiles()
    }

    render(){
        return(
                <div id = 'index'>
                    <AddButton/>
                    <div>
                        {fileStore.files.map(file=>(<FileHodler imageSrc={ipfsUrl+file.hash}/>))}
                    </div>
                </div>
        
        )
    }
}
ReactDOM.render(<Main/>,app);