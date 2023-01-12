import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!saved.includes(movie)) {
      setSaved([...saved, movie]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <MovieList {...props} movies={movieList} />}
        />
        <Route
          exact
          path="/movies/:id"
          render={(props) => (
            <Movie {...props} addToSavedList={addToSavedList} />
          )}
        />
      </Switch>
    </div>
  );
}
