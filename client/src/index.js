import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/Movie';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieCard}/>
    </div>
  </Router>,
  document.getElementById('root')
);
