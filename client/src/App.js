import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/' render={(props) => <MovieList {...props} />} />
        <Route exact path='/movies/:id' render={(props) => <Movie {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
