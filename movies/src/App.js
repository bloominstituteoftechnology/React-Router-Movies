import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movie from './components/Movie';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ MoviesList }/>
        <Route path="/movies/:id" component={ Movie }/>
        <Route path="/new-movie" component={ AddMovie }/>
      </div>
    );
  }
}

export default App;