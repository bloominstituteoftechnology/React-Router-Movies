import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import { BrowserRouter, Route, Router, Switch, Link, useParams, useLocation } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => setMovieList(response)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        )
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
  
    <div className="body">
      <div className="saved-list">
    <SavedList list={[ /* This is stretch */]} />
    </div>

    <div className="movie-card">
    <Switch>
      <Route path="/movies">
      <Movie />
      </Route>
      

      <Route>
      <Link path="/movies/:id"/>
      <MovieList />
      </Route>
      </Switch>
      </div>
      </div>


   
  )
};
