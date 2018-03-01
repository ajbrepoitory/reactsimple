import React from 'react';
import ReactDOM from 'react-dom';
// using an ES6 transpiler, like babel
import Image from 'react-image';
import axios from 'axios';
import Pane from './Pane.jsx';
import Slider from './Slider.jsx'

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

    //axios.get('http://crudapp-os3data.a3c1.starter-us-west-1.openshiftapps.com/quotes')
    /*axios.get('http://ip.jsontest.com/')
    .then(res => {
      console.log("Component Mounted data loaded");
      console.log('Data IP ::'+ res.statusText);
    });*/
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
/*    componentDidMount() {
        fetch("http://crudapp-os3data.a3c1.starter-us-west-1.openshiftapps.com/quotes")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }*/
      
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
        <p>{headingValue}</p>
        <img src={logo}/>
        <button className={w3Styles.title} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>        
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('reactPane'));