import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Route } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const Navigation = () => {
  return(
  <div>
    <Route exact path = "/" component = {MovieList} />
    <Route path="/id" component={id}/> 
    </div>
  );
}
ReactDOM.render(
  <div>Application running, add your routing 
  <Router>
    <Movie/>
  </Router>
  </div>
  ,document.getElementById('root')
);
