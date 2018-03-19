import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
/*import { Switch } from 'react-router-dom'*/
ReactDOM.render(
  <Router>
    <div>
      <h2>Movies</h2>
    <Route exact path="/" component={ MovieList } />
    <Route path="/movies/:id" component={ Movie } />
  </div>
</Router>,
  /*<div>Application running, add your routing</div>,*/
  document.getElementById('root')
);