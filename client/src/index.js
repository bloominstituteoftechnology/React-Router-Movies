import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div> 
    <Route exact path="/" component={MovieList}/>  
    <Route path="/" component={Movie}/> 
    </div>
  </Router>
  , document.getElementById('root')
);
