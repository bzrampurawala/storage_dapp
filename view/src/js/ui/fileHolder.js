import React from 'react'

class FileHolder extends React.Component{
    render(){
        return(
            <img src = {this.props.imageSrc}/>
        )
    }
}
export default FileHolder