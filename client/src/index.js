import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import './index.css';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);