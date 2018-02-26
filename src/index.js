import React from 'react';
import ReactDOM from 'react-dom';
// using an ES6 transpiler, like babel
import Image from 'react-image';
import axios from 'axios';

//import styles from '../css/w3.css';
const logo = require('../Chan.png');

var headingValue="This is A good Day";
var quotes="Initial";
class App extends React.Component {
    constructor(props) {
        super(props); this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
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
      
      /*componentDidMount() {
        axios.get('http://crudapp-os3data.a3c1.starter-us-west-1.openshiftapps.com/quotes')
          .then(res => {
            this.setState({

            quotes:res.data

            });
          });
      }*/  
    render(){
        return(
        <div>
        <h1>React Heading</h1>
        <p>This content is rendered through React JSX</p>      
        <p>{headingValue}</p>
        <img src={logo}/>
        {quotes}
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('reactPane'));