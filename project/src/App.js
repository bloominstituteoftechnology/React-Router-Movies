import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './containers/MoviesList';
import MovieInfo from './components/MovieInfo';
import { Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div> 
        <Route path='/' component={ Navigation } />
        <Route path='/new-movie' />
        <Route exact path='/movies' component={ MoviesList } />
        <Route path='/movies:id' component={ MovieInfo } />
      </div>
    );
  }
}

export default App;
