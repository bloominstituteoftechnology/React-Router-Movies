import React, { useState, useEffect } from "react";
import axios from "axios";
import movieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route, Link } from "react-router-dom";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
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
      {/* <Link to="/movielist">Movie List</Link>
      <Link to="/movies/:id">Movie</Link> */}
      <Route
        exact
        path="/movielist"
        render={(props) => (
          <MovieList
            history={props.history}
            location={props.location}
            match={props.match}
            movies={movieList}
          />
        )}
      />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
