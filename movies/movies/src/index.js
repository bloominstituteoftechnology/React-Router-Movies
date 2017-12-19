import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MoviesList from './components/MoviesList/MoviesList';
import MoviesInfo from './components/MovieInfo/MovieInfo';
import AddMovie from './components/AddMovie/AddMovie';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/movies/:id" component={ MoviesInfo } />
      <Route path="/new-movie" component={ AddMovie } />
      <Route exact path="/" component={ MoviesList } />
    </div>
  </Router>,

  document.getElementById("root")
);