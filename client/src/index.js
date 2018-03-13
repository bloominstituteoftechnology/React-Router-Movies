import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const linkStyles = {
  padding: '2rem',
  textDecoration: 'none',
}

const Routes = () => {
  return (
  <div>
    <Navigation/>
    <Route exact path="/" component={ MovieList }/>
    <Route path="/movies/:id" component={ Movie }/>
  </div>
  )
} 

const Navigation = () => {
  return (
    <div>
      <Link style={linkStyles} to="/">Home</Link>
      <Link style={linkStyles} to="/movies/:id">Movie</Link>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
