import React from 'react';
import ReactDOM from 'react-dom';
import fileObject from './utils/storeFiles';
const app = document.getElementById('main');
class Main extends React.Component{
    handleOnClick(e){
        e.preventDefault()
        e.stopPropagation()

        const files = e.currentTarget.files;
        fileObject.upload(files[0]);
    }
    render(){
        return(
        <div>
            <label className='addButton'>
            Add File
                <input accept='true' autoComplete='off' className = 'fileInput' type="file" tabIndex='-1' onChange = {this.handleOnClick.bind(this)}/>
            </label>
        </div>
        )
    }
}
ReactDOM.render(<Main/>,app);