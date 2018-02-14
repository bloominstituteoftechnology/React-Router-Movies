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
          <NavLink to="/movies">
            Movie List
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies"/>
        </li>
      </ul>
    <Route path="/movies" component={MovieList} exact/>
    <Route path="/movies/:id" component={Movie}/>
  </div>
  </Router>,
  document.getElementById('root')
);
