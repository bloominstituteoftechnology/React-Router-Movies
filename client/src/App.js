import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route path="/movies">
        <SavedList list={savedList} />
      </Route>
      <Route exact path="/movies">
        <MovieList />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
