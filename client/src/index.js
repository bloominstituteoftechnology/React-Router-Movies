import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ Movie } />  
      </div>
    </Router>,
  document.getElementById('root')
);
