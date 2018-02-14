import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

// function MovieList(props) {
//   return ()
// }

ReactDOM.render(
  <Router>
  <div>Application running, add your routing</div>
  </Router>,
  document.getElementById('root')
);
