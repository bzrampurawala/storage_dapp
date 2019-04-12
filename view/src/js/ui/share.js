import React from 'react'
import { to, from, share } from '../constants'
import { observer } from 'mobx-react';
import store from '../store'

@observer
export default class ShareUI extends React.Component{
    render(){
        return(
            <div id = "shareUI">
                <div id = "textView">
                    <label id = "fromText"> {from}: </label>
                    <label id = "fromAddressText"> {store.account} </label>
                </div>
                <div id = "textView">
                    <label id = "toText"> {to}: </label>
                    <input type = "toAddresstext" name = "toAddress"></input>
                </div>
                <button id="shareButton">{share}</button>
            </div>
        )
    }
}