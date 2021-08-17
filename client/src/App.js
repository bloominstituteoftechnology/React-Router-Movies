import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

export default function App () {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') 
        .then(res => {
          setMovieList(res.data);
        })
        .catch(error => {
          console.error('Server Error - error fetching movie list data', error);
        });
    }
    getMovies();
  }, []);

  // const addToSavedList = id => {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Switch>
          <Route exact path='/'>
            <MovieList movies={movieList}/>
          </Route>
      
          <Route path={'/movies/:id'}>
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
