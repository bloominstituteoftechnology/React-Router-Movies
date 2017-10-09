import React, { Component } from 'react';
import MoviesList from './components/MoviesList.js';
import {Route} from 'react-router-dom';
import MovieItem from './components/MovieItem.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/movie' component={MoviesList} />
        <Route path="/movie/:id" component={MovieItem} />

      </div>
    );
  }
}

export default App;
