import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router, 
Link, 
Route } from 'react-router-dom';

class Movies extends Component {
    constructor()
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
    <Router>
        <div>
            <App />
            </div>
            </Router>, 
            document.getElementById('root')
);
