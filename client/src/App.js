import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import {Route, Link} from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
    <Route exact path ='/' component = {MovieList}>Movie List</Route>
    <Route path ='/movies/:id' component={Movie}></Route>

      <SavedList list={savedList}></SavedList>
      </div>
  );
};

export default App;
