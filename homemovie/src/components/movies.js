import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 
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


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Link, 
Route } from 'react-router-dom';

export default class Home extends Component {
    constructor()
    super();

}

render () {
    return(
        <div>

            <h1> HOME </h1>

            </div>
    );
};
}
