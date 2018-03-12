import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


ReactDOM.render(
  <Router>
    <div>
      <MovieList />
      <Movie />
    </div>
    </Router>,
  document.getElementById('root')
);
