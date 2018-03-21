import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <h2>Movies</h2>
      <Route exact path="/" component={ MovieList } />
      <Route to="/movies/:id" component={ Movie } />
      </div>
    </Router>,
  document.getElementById('root')
);
