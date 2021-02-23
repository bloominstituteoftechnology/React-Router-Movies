import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          //  debugger
          setMovieList(response.data);  
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!id) {
      return setSaved(id)}
      else{
        return id;
      }
  };

  return (
    <div>
      <nav className="nav-bar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies/saved-list"> Saved List</NavLink></li>
      </ul>
      </nav>
      <Switch>
      <Route path='/movies/saved-list' >
        <SavedList list={movieList} />
      </Route>

      <Route path='/movies/:id'>
        <Movie />
      </Route>

      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>
      </Switch>
    </div>
  );
}
