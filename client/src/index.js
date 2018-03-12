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
    <Route path="/movies/:id" component={Movie}/> 
    </div>
  );
}
ReactDOM.render(
  // <div>Application running, add your routing 
  <Router>
    <div>
    {/* <Route exact path = "/" component = {MovieList} />
    <Route path="/movies/:id" component={Movie}/>  */}
    <Router>
    <Navigation/>
    </Router>
    </div>
  </Router>
  ,document.getElementById('root')
);
