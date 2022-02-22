import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ! Since we're using Route further down, don't forget to import it up here!!
import { Route, Switch, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';

// ! Don't forget to import all of the other Pages you'll be routing to:
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        //*  debugger
        
          setMovieList(response.data)
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

    <Switch>

    <Route path="/">
      <MovieList movies={ movieList }/>
    </Route>

    {/*  the colon after the forward slash after movies " movies/:id  "  tells React to define a new 
    variable of whatever follows the colon (id) which is now usable */}
    <Route path="/movies/:id">
      <Movie/>
    </Route>

    <Route>
      <SavedList />
    </Route>

    </Switch>
      
    </div>
  );
}
