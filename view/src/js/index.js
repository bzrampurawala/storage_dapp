import React from 'react';
import ReactDOM from 'react-dom';
import AddButton from './ui/addButton';
import FileHolder from './ui/fileHolder';
const app = document.getElementById('main');
class Main extends React.Component{

    render(){
        return(
        <div id = 'index'>
           <AddButton/>
           <div>
           </div>
        </div>
        )
    }
}
ReactDOM.render(<Main/>,app);