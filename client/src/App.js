import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
//import SavedList from './Movies/SavedList';

export default function App () {
  //const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log(response.data)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  //const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  //};

  return (
    <div>

      <Link to="/"> Home </Link>
      <Link to="About"> About </Link>
      <Route exact path='/' render={() => <MovieList movies={movieList}/> }/>   
      <Route path='/movies/:id' render={() => <Movie />} />

    </div>
  );
}
