import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router } from 'react-router-dom'; 

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

ReactDOM.render(
  <Router>
    <div>
      <h1>Main</h1>
      <Route exact path='/' component={ MovieList } />
      <Route path='/:id' component={ Movie } />
    </div>

  </Router>
,  document.getElementById('root')
);
