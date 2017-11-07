import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import MoviesContainer from './components/MoviesContainer';
import MovieContainer from './components/MovieContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={MoviesContainer} />
        <Route path="/movies/:id" component={MovieContainer} />
      </div>
    );
  }
}

export default App;
