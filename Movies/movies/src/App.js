import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieDescriptions from './components/MovieDescriptions';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <AddMovie/>
        <MovieList/>
        </div>
        <div>
        <MovieDescriptions/>
        </div>
        <div>
        <Link to="/movies">Movies</Link>
        <Link to="/new-movie">Add A Movie</Link>
        </div>
      </div>
    );
  }
}

export default App;
