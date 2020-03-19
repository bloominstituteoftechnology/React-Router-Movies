import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// import MovieList and Movie
import  MovieList  from './Movies/MovieList';
import  Movie  from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path="/" component={MovieList}></Route>
      <Route exact path="/movies/:id" component={Movie}></Route>
      
    </div>
  );
};

export default App;
