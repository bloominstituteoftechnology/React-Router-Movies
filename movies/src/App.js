import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import { Home, MovieList, MovieItem } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Navigation/>
     <Route exact = {true} path = "/" component = {Home}/>
     <Route path = "/movielist" component = {MovieList}/>
     <MovieItem/>
      </div>
    );
  }
}

export default App;
