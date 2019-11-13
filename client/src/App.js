import React, { useState } from "react";
import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={() => <MovieList />} />
      <Route path="/movie/:id" render={props => <Movie {...props} />} />
    </div>
  );
};

export default App;
