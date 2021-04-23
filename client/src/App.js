import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!saved.find((item) => item.id === Number(id))) {
      let temp = [...saved];
      temp.push(movieList[id]);
      temp.sort((a, b) => a.id - b.id);
      setSaved([...temp]);
      console.log(`${movieList[id].title} was added to the saved movies list.`);
    } else {
      console.log(
        `${movieList[id].title} is already in the saved movies list.`,
      );
    }
  };

  return (
    <div>
      <SavedList list={saved} />

      <Switch>
        <Route path="/movies/:id">
          <Movie save={addToSavedList} />
        </Route>
        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
