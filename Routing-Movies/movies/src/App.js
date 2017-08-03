import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Movies, MoviesList, MoviesTitle } from './components';

const App = () => (
  <div>
    <Navigation/>
    <Route path="/" component={ Movies }/>
    <Route path="/movieslist" component={ MoviesList }/>
    <Route path="/moviestitle" component={ MoviesTitle }/>
  </div>
)

export default App;
