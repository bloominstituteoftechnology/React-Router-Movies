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

  const [savedMovie, setSavedMovie] = useState(true);

  return (
    <div>
      <SavedList list={savedList} savedMovie={savedMovie} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} setSavedMovie={setSavedMovie} />
      </Route>
    </div>
  );
};

export default App;
