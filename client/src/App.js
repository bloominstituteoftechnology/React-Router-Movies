import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
      //Could not for the life of me get the code to work on the 5000 port. Shout out to the lady from support hours.
        .get('http://localhost:4000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          console.log(response)
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
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>
        <Route path='/movie/:id'>
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
