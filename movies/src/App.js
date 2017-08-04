import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import { Navigation } from './components/Navigation';
import Home from './components/Home';
import MovieForm from './components/MovieForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <Route exact path='/' component={Home} />
	  <Route exact path='/movies' component={MoviesList} />
          <Route exact path='/movies/:id' component={Movie} />
	  <Route path='/addmovie' component={MovieForm} />
      </div>
    );
  }
}

export default App;
