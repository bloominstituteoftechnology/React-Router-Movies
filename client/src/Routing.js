import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

function Routing(props) {

  return (
    <Router>
    <div>
        <Route path='/' component={MovieList} exact></Route>
        <Route path='/movies/:id' component={Movie}></Route>
    </div>
  </Router>
  );
}

export default Routing;