import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    <div>
      {/* <NavLink to="/" activeClassName="navlink--active">MovieList</NavLink> */}
      {/* <NavLink to="/movies/:id" activeClassName="navlink--active">Movie</NavLink> */}
      <Route path="/" component={MovieList} exact />
      <Route path="/movies/:id" component={Movie} exact />
    </div>
  </Router>,
  document.getElementById('root')
);
