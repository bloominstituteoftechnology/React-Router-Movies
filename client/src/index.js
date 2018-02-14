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
        <li>
          <NavLink to="/api/movies">
            Movie List
          </NavLink>
        </li>
      </ul>
    <Route path="/api/movies" component={MovieList}/>
  </div>
  </Router>,
  document.getElementById('root')
);
