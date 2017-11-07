import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import { Home, GodFather, StarWars, LOTR } from './components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
