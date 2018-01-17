import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div className="movtitle">
    <h1>Movies</h1>
    <Route path="/" component={MovieList} />
    <Route path="/Movie/:id" component={Movie} />
  </div>
  </Router>,
  document.getElementById('root')
);
