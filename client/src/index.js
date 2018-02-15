import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="navlink--active" exact>MovieList</NavLink></li>
      </ul>
      <Route path="/" component = {MovieList} exact />
      <Route path="/movies/:idMatch" component = {Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
