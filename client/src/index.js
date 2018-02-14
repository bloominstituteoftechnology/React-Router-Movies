import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    <div>
      <NavLink to="/" activeClassName="navlink--active"><MovieList /></NavLink>
      <route path="/" component={MovieList}/>
      <route path="/movies/:id" component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
