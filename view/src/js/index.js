import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import "@babel/polyfill"
import retrieveFiles from './utils/retrieveFiles';  
import FileHolder from './ui/fileHolder';
const app = document.getElementById('main');
class Main extends React.Component{

    loadFiles(){
        retrieveFiles.get()
    }
    render(){
        return(
        <div id = 'index'>
           <AddButton/>
           <div>
            {this.loadFiles()}
           </div>
        </div>
        )
    }
}
ReactDOM.render(<Main/>,app);