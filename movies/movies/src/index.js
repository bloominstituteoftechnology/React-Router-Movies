import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MoviesList from './components/MoviesList/MoviesList';
import MoviesInfo from './components/MovieInfo/MovieInfo';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/movies/:id" component={ MoviesInfo } />
      <Route exact path="/" component={ MoviesList } />
    </div>
  </Router>,

  document.getElementById("root")
);