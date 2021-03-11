import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import { Router } from 'express';
import {Route} from 'react-router-dom';
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';
import MovieDetail from './Movies/MovieList';
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
      
      <Route exact path="/">
         <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:movieID">
         <Movie movie={MovieCard} />
      </Route>
    </div>
  );
}
