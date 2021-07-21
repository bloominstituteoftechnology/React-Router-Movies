import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

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
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    const movie = movieList.find(movie => movie.id === +id)
    const savedMovie = saved.find(movie => movie.id === +id)
    
    return !savedMovie ? setSaved([...saved, movie]) : null
    
    // This is stretch. Preven t the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={saved} />
      <Switch>
        <Route exact path='/'>
          <MovieList movies={movieList} />
        </Route>
        <Route path='/movies/:id'>
        <Movie addToSavedList={addToSavedList}/>
        </Route>
        <Redirect to='/' />
      </Switch>

      <MovieList movies = {movieList}/>

      {/* Replace this Div with your Routes */}
    </div>
  );
}

