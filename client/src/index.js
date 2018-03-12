import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'



const App = () =>{
  return(
  <div>
      <Navigation />
      <div>
            <h1>Our list of movies</h1>
            <Route exact path = '/' component = { MovieList } />
            <Route path = '/movies/:id' component = { Movie } />
      </div>
  </div>
  );
};

const Navigation = ({match}) =>{
  return(
    <div>
      <Link to = '/'>Movie</Link>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
