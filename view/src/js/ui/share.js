import React from 'react'
import { to, from, share, toAddressPlaceHolder } from '../constants'
import { observer } from 'mobx-react';
import store from '../store'
import { web3js } from '../core/web3';
// import web3 from 'web3'

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

    shareFile(event){
        event.preventDefault()
        if(this.state.inputAddress.length === 0) alert("To address cannot be empty")
        else if (!web3js.utils.isAddress(this.state.inputAddress)) alert("Invalid address")
        else{
            // to implement
            console.log(this.props.index)
            console.log(this.state.inputAddress)
        }
    }
    render(){
        return(
            <div id = "shareUI">
                <div id = "textView">
                    <label id = "fromText"> {from}: </label>
                    <label id = "fromAddressText"> {store.account} </label>
                </div>
                <div id = "textView">
                    <label id = "toText"> {to}: </label>
                    <input type = "toAddresstext" name = "toAddress" value = {this.state.inputAddress} onChange = {this.handleInput.bind(this)} placeholder={ toAddressPlaceHolder } ></input>
                </div>
                <button id="shareButton" onClick = {this.shareFile.bind(this)}>{share}</button>
            </div>
        )
    }
}