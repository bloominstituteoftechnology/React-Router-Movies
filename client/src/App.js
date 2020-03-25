import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

// MUST IMPORT ROUTE, MOVIE, AND MOVIE LIST
import { Route } from "react-router-dom";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList"


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/'>
      {/* one route for `/` that loads the `MovieList` component. */}
        <MovieList /> 
      </Route>
      {/* one route that will take an `id` parameter after`/movies/` */}
      {/* NOT SURE HOW THEY GOT THIS */}
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
