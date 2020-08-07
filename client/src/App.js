import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movies from './Movies/Movie';
import SavedList from './Movies/SavedList';
import axios from 'axios';

const App = () => {
  const [saved, setSaved] = useState([]); 
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error)
        })
    }
    getMovies();
  },[]);
  const addToSavedList = movie => {
    setSaved( [...saved, movie] );
  };

  return (
    <Router>
      <SavedList list={saved} />
      <Route render={props => <MovieList {...props} movies={movieList}/>}exact path = "/"/>
      <Route render={props => <Movies {...props} addToSavedList={addToSavedList} />}  path ="/movies/:movieID"/>
    </Router>
  );
};

export default App;
