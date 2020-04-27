import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [id, setId] = useState(1);

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
      <SavedList list={savedList} />
      <div>
        <Switch>
            <Route path={`/movies/:movieId`}>
                <Movie movies={movieList} />
            </Route>
            <Route path='/'>
                <MovieList movies={movieList} />
            </Route>
        </Switch>
      </div> 
    </div>
  );
};

export default App;
