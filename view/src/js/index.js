import React from 'react';
import ReactDOM from 'react-dom';
const app = document.getElementById('main');
class Main extends React.Component{
    render(){
        return(<h1>hello world</h1>)
    }
}
ReactDOM.render(<Main/>,app);