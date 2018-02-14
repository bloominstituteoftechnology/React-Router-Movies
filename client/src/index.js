import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => (
  <Router>
    <div>
      <NavLink to="/">Movie List</NavLink>
      <Route path = "/" component={MovieList} exact />
      <Route path = "/movies/:id" component={Movie} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
