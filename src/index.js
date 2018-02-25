import React from 'react';
import ReactDOM from 'react-dom';
// using an ES6 transpiler, like babel
import Image from 'react-image';

//import styles from '../css/w3.css';
const logo = require('../Chan.png');

var headingValue="This is A good Day";
class App extends React.Component {
    constructor(props) {
        super(props);
      }
      
    render(){
        return(
        <div>
        <h1>React Heading</h1>
        <p>This content is rendered through React JSX</p>      
        <p>{headingValue}</p>
        <img src={logo}/>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('reactPane'));