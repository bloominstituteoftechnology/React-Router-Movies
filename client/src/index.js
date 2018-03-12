import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    Application running, add your routing
      <MovieList />
      <Movie id="" />
  </Router>
  , document.getElementById('root')
);
