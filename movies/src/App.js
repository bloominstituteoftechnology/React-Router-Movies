import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Navigation from './Components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Route exact path="/" component={Home}/> // self closing
      <Route path="/movies/:info" component={Movies}/> 
      </div>
    );
  }
}

export default App;
