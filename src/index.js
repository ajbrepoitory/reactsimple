import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
        <div class="w3-twothird w3-container">
        <h1 class="w3-text-teal">React Heading</h1>
        <p>This content is rendered through React JS</p>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('reactPane'));
