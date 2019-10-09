import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import { Route, Link } from "react-router-dom";

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );
// eslint-disable-next-line
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      {/* <SavedList list={savedList} {...props}/> */}
      <Route path="/" render={(props) => {
        return <SavedList {...props} list={savedList} />
      }} />
      <Route exact path="/movies" component={MovieList}/>
      <Route path="/movies/:id" component={Movie} />
      <Link to="/movies">Movie List</Link>
    </div>
  );
};

export default App;