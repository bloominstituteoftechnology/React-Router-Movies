import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') 
        .then(response => {
          console.log('data: ', response.data);
          setMovieList(response.data);
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  /*const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };*/

  return (
  
    <div>
      <Route path={'/'}>
        <MovieList movieList={movieList}/>
      </Route>

      <Route path={'/movies/:movieId'}>
        <Movie movieList={movieList}/>
      </Route>
    </div>
  
  );
}
