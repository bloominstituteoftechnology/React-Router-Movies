import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'



ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={MovieList} exact/>
      <Route path={`/movies/1`} component={Movie}/>
    </div>
  </Router>,
  document.getElementById('root')
);