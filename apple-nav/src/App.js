import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './NavBar/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
      </div>
    );
  }
}

export default App;
