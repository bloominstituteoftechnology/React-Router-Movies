import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(response => {
        console.log(response.data)
        setMovieList(response.data)
      })
      .catch(err => {
        console.error('catch error')
      })
  }, [])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path='/list'>
          <MovieList movies={movieList} />
        </Route>
        <Route path='/movies/:id'>
          <Movie movieList={movieList} />
        </Route>
      </div>
    </div>
  );
};

export default App;
