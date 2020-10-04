import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response);
          setMovieList(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    setSaved([...saved, movie]);
  };

  return (
    <div>
      <SavedList list={saved} />

      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>
      <Route exact path='/movies/:id'>
        <Movie
          addToSavedList={addToSavedList}
          saved={saved}
          setSaved={setSaved}
        />
        //
      </Route>
    </div>
  );
}
