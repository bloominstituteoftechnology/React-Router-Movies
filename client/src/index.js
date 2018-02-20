import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

ReactDOM.render(
  <Router>
    <div>
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <Route path="/" component={MovieList} exact></Route>
      <Route path="/movies/:id" component={Movie}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
xsa
// one route that will take an id parameter after/movies/
// (ex: movies/2, movies/3 where the id is dynamic).
// This route should load the Movie component.