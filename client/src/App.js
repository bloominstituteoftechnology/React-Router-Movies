import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movies, setMovies] = useState ([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
        
    }
    
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" 
      render={props => <MovieList {...props} movies={movies}
      />}
      />
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
