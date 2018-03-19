import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <div>Application running, add your routing</div>,
  <Route path="/" component={ MovieList} />,
  <Route path='/movielist/:id' component={ Movie} />,
  document.getElementById('root')
);
