import React, { Component } from 'react';
import MoviesList from './components/MoviesList.js';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <MoviesList />
      </div>
    );
  }
}

export default App;
