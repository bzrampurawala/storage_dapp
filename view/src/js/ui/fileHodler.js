import React from 'react'
import ShareUI from './share'

class FileHodler extends React.Component{
    render(){
        return(
            <div id = "singleFileView">
                <img src = {this.props.imageSrc}/>
                <ShareUI index={this.props.index}/>
            </div>
        )
    }
}
export default FileHodler