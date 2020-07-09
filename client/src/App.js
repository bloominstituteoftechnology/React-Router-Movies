import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from "react-router-dom"

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

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
      {/* <Link to="/">Saved Movies</Link>
      <Link to="/movies/:id">Saved Movies</Link> */}
      <SavedList list={savedList} />      
      {/* create / route  that loads the movieList pass movieList as prop*/}
      <Switch>
        <Route exact path="/">
          <MovieList movies={movieList}/>
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
