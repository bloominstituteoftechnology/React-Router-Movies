import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={MovieList} />
    <Route path="/movies/:id" component={Movie} />
  </div>
);

const Navigation = () => {
  return (
    <div className="home">
      <Link to="/">Home</Link>
    </div>
  );
};

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
