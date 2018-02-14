import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

function Home() {
  return (
    <div>
      <h1>YOU ARE HOME</h1>
      <MovieList />
    </div>
  );
};

function Movies(){
  return (
    <div>
      <h1>YOU ARE AT MOVIES</h1>
      <Movie />
    </div>
  );
};

ReactDOM.render(
  <Router>
  <div>
    <ul>
      <li><NavLink activeClassName='navlink--active' to='/' exact>Home</NavLink></li>
      <li><NavLink activeClassName='navlink--active' to='/movies/'>Movies</NavLink></li>
    </ul>
    <Route path='/' exact component={Home}/>
    <Route path='/movies/:id' component={Movies}/>
  </div>
  </Router>,
  document.getElementById('root')
);
