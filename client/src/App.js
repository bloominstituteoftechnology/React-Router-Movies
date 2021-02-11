import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from "./Movies/Movie"

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
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
  };

  return (
    <div>
      <nav className="nav-items">
      <Link to="/movies">Movies</Link>
      <Link to="/saved-list">Saved List</Link>
      </nav>
      
      <Switch>
        <Route path="/movies/:id"> {/* id is a variable name defined in my parameters. */}
          <Movie />
        </Route>
        <Route path="/movies">
          <MovieList movies={movieList} />
        </Route>
        <Route path="/saved-list">
        <SavedList list={[ /* This is stretch */]} />
        </Route>
      </Switch>
    </div>
  );
}
