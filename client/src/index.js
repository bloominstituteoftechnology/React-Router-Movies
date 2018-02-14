import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => (
  <Router>
    <div>
    <ul>
        <li>
          <NavLink to="/" activeClassName="navlink--active">
            GetMovie
          </NavLink>
        </li>
      </ul>
      <Route path = "/" component={MovieList} exact />
      <Route path = "/movies/:id" component={Movie} />
    </div>
  </Router>
)


function GetMovie(props) {
  console.log(typeof(Movie), Movie);
  return (
    <div>
      <h3>hello</h3>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));