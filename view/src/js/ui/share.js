import React from 'react'
import { to, from, share, toAddressPlaceHolder } from '../constants'
import { observer } from 'mobx-react';
import store from '../store'
import { web3js } from '../core/web3';
import { shareFile } from '../core/shareFile'
@observer
export default class ShareUI extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            inputAddress:""
        }
    }
    handleInput(event){
        this.setState({
            inputAddress: event.target.value
        })
    }

    clickToShareFile(event){
        event.preventDefault()
        if(this.state.inputAddress.length === 0) alert("To address cannot be empty")
        else if (!web3js.utils.isAddress(this.state.inputAddress)) alert("Invalid address")
        else{
           shareFile(this.props.index ,this.state.inputAddress)
        }
    }
    render(){
        return(
            <div id = "shareUI">
                <input type = "toAddresstext" name = "toAddress" value = {this.state.inputAddress} onChange = {this.handleInput.bind(this)} placeholder={ toAddressPlaceHolder } ></input>
                <button id="shareButton" onClick = {this.clickToShareFile.bind(this)}>{share}</button>
            </div>
        )
    }
}