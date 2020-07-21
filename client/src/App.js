import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
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
    setSaved([...saved, id]);
  };

  return (
    <div>
      {/* <SavedList list=This is stretch /> */}
      <SavedList list={saved} />
      <div className="nav-links">
        <Link to="/">Movies</Link>
        <Link to="/movies/">Movie</Link>
      </div>

      <div>
        {/* Replace this Div with your Routes */}
        <Switch>
          <Route path="/movies/:itemId">
            <Movie movieList={movieList} />
          </Route>
          <Route path="/">
            <MovieList movieList={movieList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
