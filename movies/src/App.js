import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie';
import NewMovie from './containers/NewMovie';
import { Route } from 'react-router-dom';

import Navigation from './containers/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path='/movies/:id' component={Movie} />
        <Route path='/add' component={NewMovie} />
      </div>
    );
  }
}

export default App;
