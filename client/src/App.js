import React, { useState } from 'react';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/home' component={MovieList}/>
      <Route exact path='/movies/:id' component={Movie}/>
    </div>
  );
};

export default App;
