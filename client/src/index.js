import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

function aMovie(props) {
  return (
    <div>
      <Movie id={props.match.params.id}/>
    </div>
  )
}

ReactDOM.render(
        <Router>
            <div>
                <NavLink to="/" activeClassName="back-lnk" exact> Back </NavLink>
                <Route path="/" component={MovieList} exact />
                <Route path="/movies/:id"  component={aMovie}/>
            </div>
        </Router>
    , document.getElementById('root')
);
