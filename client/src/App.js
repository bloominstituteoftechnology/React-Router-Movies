import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js'
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);



  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log("--------------------------");
          console.log(response.data);
          console.log("--------------------------");
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
      <SavedList list={[ /* This is stretch */]} />

      <Route path="/">
        <MovieList movies={movieList}/>
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>

      {/* <Switch>
        <Route path="/items-list/:itemID">
          <Item items={stock} />
        </Route>
        <Route path="/items-list">
          <ItemsList items={stock} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}
