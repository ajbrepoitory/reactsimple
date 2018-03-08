import React from 'react';
import ReactDOM from 'react-dom';
// using an ES6 transpiler, like babel
import axios,{ post } from 'axios';
import Pane from './Pane.jsx';
import Slider from './Slider.jsx'
import SimpleReactFileUpload from './SimpleReactFileUpload.jsx'

import w3Styles from '../css/w3.css';
const logo = require('../Chan.png');
const data = require('../src/quotes')


var headingValue="This is A good Day";
var quotes="Initial";
class App extends React.Component {
    constructor(props) {
        super(props); this.state = {
            isToggleOn: true,
            error: null,
            isLoaded: false,
            items: []
            
        }
  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    axios
    .get('https://www.reddit.com/r/reactjs.json')
    .then(({ data })=> {
      this.setState({ 
        kind: data.kind, 
        data: data.data.children
      });
      console.log(this.state.kind);
    })
    .catch((err)=> {})

  }    

  componentDidMount() {
    console.log("Component Mounted");        
  }
    render(){
        return(
        <div>
        <h1>React Heading</h1>
        <p>This content is rendered through React JSX</p>    
        <Pane/>
        <Slider/>  
        <SimpleReactFileUpload/>
        <p>{headingValue}</p>
        <img src={logo}/>
        <button className={w3Styles.submitButton} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>        
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('reactPane'));