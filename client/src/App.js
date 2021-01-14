import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

import axios from "axios";

import SavedList from "./Movies/SavedList";
import Movielist from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          console.log("response: ", response);
          // Study this response with a breakpoint or log statements
          setMovieList(response.data);
          // and set the response data as the 'movieList' slice of state
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Route exact path="/">
        <Movielist movies={movieList} />
      </Route>

      <Route path="/movies/2">
        <Movie />
      </Route>
    </div>
  );
}
