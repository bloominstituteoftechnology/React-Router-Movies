import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Switch, Link, Route, useHistory } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const history = useHistory()

  const routeToHome = () => {
    history.push('/')
  }

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response);
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
      <SavedList list={savedList} toHome={routeToHome}/>
      <div>
        <Switch>
          <Route path ="/movies/:movieId">
            <Movie />
          </Route>

          <Route path = "/">
            <MovieList movies={movieList} />
          </Route>
        </Switch>
      </div>


    </div>



  );
};

export default App;
