import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
}

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <div>
  <Router>
  <Route exact path="/" component={ MovieList }></Route>
  <Route exact path="/movie/:id" component={ Movie }></Route>
  </Router>
  </div>,
  document.getElementById('root')
);
