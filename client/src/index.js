import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
  <div className="movtitle">
    <h1>Movies</h1>
    <Route path="/" component={MovieList} exact />
    <Route path="/movies/:id" component={Movie} />
  </div>
  </div>
  </Router>,
  document.getElementById('root')
);
