import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import MovieList from "../src/Movies/MovieList";
import { Route } from "react-router-dom";
import Movies from "../src/Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route path="/Movies/:id">
        <Movies />
      </Route>

      <Route exact path="/">
        <MovieList />
      </Route>
    </div>
  );
};

export default App;
