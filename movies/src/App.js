import React, { Component } from 'react';
// import logo from './logo.svg';
import MovieList from './components/MovieList'
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MovieList/>
      </div>
    );
  }
}

export default App;
