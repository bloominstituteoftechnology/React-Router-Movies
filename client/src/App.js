import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import axios from 'axios';

import SavedList from './Movies/SavedList';

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
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div className="App">
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/movies">Movies</Link>
        </nav>
          <Switch>
            <Route path="movies/:itemId">
            <Movie />
            </Route>
            <Route exact path="/">
              <MovieList  />
            </Route>
          </Switch>
        </div>
    </div>
  );
};

export default App;
