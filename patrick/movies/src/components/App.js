// import React, { Component } from 'react';
import React from 'react';

// REACT_ROUTER
import { Route } from 'react-router-dom';
import { Home, Info } from './';
// ART & STYLING
import logo from '../art/logo.svg';
import routerMagic from '../art/routing.png';
import '../css/App.css';

import Navigation from './Navigation';
import MoviesList from '../containers/MoviesList';
// import Movie from './Movie';
import MovieDetails from '../containers/MovieDetails';


const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Lambda School: React-Routing</h2>
        <img src={routerMagic} alt='Friends'></img>
      </div>
      <p className="App-intro">
        Something <code>AMAZING</code> will go here!
      </p>
      <Navigation />
      <MoviesList />
      <Route exact path="/" component={ Home } />
      <Route path="/info" component={ Info } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
    </div>
  );
}

export default App;
