import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import { BrowserRouter as Route, Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
  <div>Application running, add your routing</div>
  </Router>,
  document.getElementById('root')
);
