import React from 'react';
import fileObject from '../utils/storeFiles';
import {addFile} from '../constants';

class AddButton extends React.Component{
    handleOnClick(e){
        e.preventDefault()
        e.stopPropagation()
        const files = e.currentTarget.files;
        fileObject.upload(files[0]);
    }
    render(){
        return(
        <div id = 'buttonDiv'>
            <label className='addButton'>
            {addFile}
                <input accept='true' autoComplete='off' className = 'fileInput' type="file" tabIndex='-1' onChange = {this.handleOnClick.bind(this)}/>
            </label>
        </div>
        )
    }
}

export default AddButton