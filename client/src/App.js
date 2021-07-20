import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          setMovieList(res.data)
        })
        .catch(err => {
          console.error('Server Error', err);
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
        <Route exact path={'/'}>
          <MovieList movies={movieList} />
        </Route>
        <Route path={`/movies/:id`} component={Movie}/>
          {/* <Movie movies={movieList} /> */}
        {/* </Route> */}
      </Switch>
    </div>
  );
  
}
