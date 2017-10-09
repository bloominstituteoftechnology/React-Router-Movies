import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Movies from './components/movielist.js';
import Movie from './components/movie.js';
import AddMovie from './components/addmovie.js';
import Navigation from './components/navigation.js';
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation /> 
        <Route exact path='/' component={Home}/>
        <Route exact path='/movies' component={Movies}/>
        <Route path='/addmovies' component={AddMovie}/>
        <Route path='/movies/:id' component={Movie}/>
      </div>
    );
  }
}

export default App;
