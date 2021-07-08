import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

export default function App() {
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
          /*if (response.data.length > 0) {
            console.log(response.data.length)
          response.data.map(x => (setMovieList(x.title)));
          const initialState = response.data.map(o => o.title);
          setMovieList(initialState);
          response.data.map(x => (console.log(x.title)));
          }        */

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

      <div><Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>
        <Route path="/movies/:id">
          <Movie movie={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
