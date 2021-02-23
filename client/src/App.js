import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import {Route, Switch} from 'react-router-dom'
import MovieList from './Movies/MovieList.js'
import Movie from './Movies/Movie.js'
//import MovieList from './Movies/MovieList.js'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <Switch>
      <Route path="/Movies/:movieID">=
        <Movie movies={movieList} />
        <SavedList list={saved}/>
      </Route>
      <Route path="/">=
        <MovieList movies={movieList} />
      </Route>
    </Switch>
  );
}
