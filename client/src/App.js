import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
//import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import ReactDOM from "react-dom";

import { Switch, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'



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
    if (saved.some(element => element.id ==id)) {
     return undefined
   }
   else {
     setSaved([...saved, movieList.find(obj => obj.id == id)])
   }
  };
console.log(saved)
  return (
    <Router>
    <div>
      <SavedList list={saved}/>
      <Switch>
        <Route path='/movies/:id'>
          <Movie/>
        </Route>

        <Route path='/'>
            <MovieList movies = {movieList}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default App;
