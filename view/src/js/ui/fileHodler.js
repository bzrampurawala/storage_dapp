import React from 'react'
import ShareUI from './share'

class FileHodler extends React.Component{
    onClickImage(event){
        event.preventDefault()
        window.open(this.props.href,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
    }
    render(){
        return(
            <div id = "singleFileView">
                <img src = {this.props.imageSrc} onClick={this.onClickImage.bind(this)}/>
                <ShareUI index={this.props.index}/>
                <label id="nameText"> {this.props.name} </label>
            </div>
        )
    }
}
export default FileHodler