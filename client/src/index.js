import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
  <Router>
    
    <div>Application running, add your routing
    <Route exact path="/" component={MovieList} />
    <Route path={`/movies/`} component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
