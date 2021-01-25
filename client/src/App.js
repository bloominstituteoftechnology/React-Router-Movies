import React, { useState, useEffect } from "react";
import axios from "axios";
// 👉 STEP 3 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // 👉 STEP 4 - Study this endpoint with Postman
        .then((response) => {
          // 👉 STEP 5 - Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          setMovieList(response.data);

          // console.log(response.data);
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
      <Link to="/">Home</Link>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movie/:id">
        <Movie />
      </Route>
    </div>
  );
}
