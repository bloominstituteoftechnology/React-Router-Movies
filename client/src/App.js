import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  { Switch, Link, Route } from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); 
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
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
    
  };

  return (
    <div>
      <SavedList list={[]} />
      <Switch>

        <Route path='/movies/:id'>
          <Movie movies={movieList} />
        </Route>

        <Route path='/'>
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
