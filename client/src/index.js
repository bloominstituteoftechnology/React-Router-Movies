import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'; // lets call it router instead of BrowserRouter

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={MovieList} exact/>
      <Route path='/movies/:id' component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
