import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Link,
Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      detail: [] 
    };

  }
render () {
  return(
    <div> 
      Whatever
    </div>

    );
  }
}

ReactDOM.render(
<BrowserRouter>
  <div>
  <App />
    </div>
</BrowserRouter>,
document.getElementById('root')
);