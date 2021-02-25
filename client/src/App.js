import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => { setMovieList(response.data) 
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          debugger;
          
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  console.log(movieList);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };


  // need two routes 
  // one route for / that loads the MovieList component.  This component will need the movies injected into it via props
  // one route that will take an id parameter after /movies/ (ex: /movies2, /movies3 where the id is dynamic) This route should load the movie component

  return (
    <div>
    <SavedList list={[ /* This is stretch */]} />

    <div>Replace this Div with your Routes</div>
    <Switch>
      <Route path='/'>
        <MovieList movielist={movieList}/>
      </Route>
      
      <Route path='movies1'>
        <Movie />
      </Route>
      </Switch>
    </div>
  );
}
