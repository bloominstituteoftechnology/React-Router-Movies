import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import { Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
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
      <Route path='/movies/:id'>
        <MovieCard />
      </Route>
      <Route path='/movies/saved'>
        <SavedList list={[ /* This is stretch */]} /> 
      </Route>
      <Route path='/'>
        <MovieList movies={movieList} title={movieList.title} director={movieList.director} metascore={movieList.metascore} />
      </Route>
    </Switch>
  );
}
