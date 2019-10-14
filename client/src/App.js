import React, { useState } from "react";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/Movie/:MovieID" component={Movie} />
    </div>
  );
};

export default App;
