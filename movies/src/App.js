import React, { Component } from 'react';
import MoviesList from './components/MoviesList.js';
import Navigation from './components/Navigation';
import Home from './components/Home.js';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home}/>
        <Route path="/starwars" component={MoviesList} />
        <Route exact path="/movies/:id" component=
      </div>
    );
  }
}

export default App;
