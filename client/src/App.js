import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { Route, Switch, Link } from 'react-router-dom';
import { Router } from 'express';
import MovieList from './Movies/Movie'
import Movie from './Movies/Movie' // <<<< THIS IS NOT RIGHT

const App = () => {
  const [savedList, setSavedList] = useState([]);
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

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:movieID">
        <Movie movieList={movieList} />
      </Route>
      </Router>
    </div>
  );
};

export default App;
