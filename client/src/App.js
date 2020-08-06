import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom'
import MoviesList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
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

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    console.log (id)
    console.log (id.id)
    console.log (saved)
      setSaved([...saved, id])
  };

  return (
    <div>
      <SavedList list={[saved]} />
      <Switch>
        <Route path = './movies/:itemId'>
          <movie addToSavedList = {addToSavedList}/>
        </Route>

        <Route path = '/'>
          <MovieList movies = {movieList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
