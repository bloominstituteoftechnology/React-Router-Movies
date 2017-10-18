import React, { Component } from 'react';
import './App.css';
import MoviesList from './containers/MoviesList';
import ViewDetails from './components/ViewDetails';
import { Route } from 'react-router-dom';
import AddMovie from './containers/AddMovies';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={ Navigation } />
        <Route path='/new-movie' component={ AddMovie }/>
        <Route exact path='/movies' component={ MoviesList }/>
        <Route path='/movies/:id' component={ ViewDetails }/>
      </div>
    );
  }
}

export default App;
