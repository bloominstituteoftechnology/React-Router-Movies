import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie.js";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  const { url, path } = useRouteMatch();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    const savedMoviesCopy = saved.slice();

    if (savedMoviesCopy.find((movie) => movie.id === +id)) return;

    const foundMovie = movieList.find((movie) => movie.id === +id);
    savedMoviesCopy.push(foundMovie);
    setSaved(savedMoviesCopy);
  };

  return (
    <div>
      <SavedList list={saved} />

      <Switch>
        <Route path={`/movie/:id`}>
          <Movie addToSavedList={addToSavedList} />
        </Route>

        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
