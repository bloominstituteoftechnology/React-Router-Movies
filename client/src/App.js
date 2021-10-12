import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'

export default function App () {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path='/' render={(props) => {
        return <MovieList movies={movieList}></MovieList>
      }}></Route>
     <Route path='/movies/:id'>
       <Movie></Movie>
     </Route>
    </div>
  );
}
