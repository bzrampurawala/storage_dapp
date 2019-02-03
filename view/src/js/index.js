import React from 'react';
import ReactDOM from 'react-dom';
const app = document.getElementById('main');
class Main extends React.Component{
    handleOnClick(){

    }
    render(){
        return(
        <div>
            <label className='addButton'>
            Add File
                <input className = 'fileInput' type="file" tabIndex='0'  onClick={this.handleOnClick}/>
            </label>
        </div>
        )
    }
}
ReactDOM.render(<Main/>,app);