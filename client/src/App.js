import React, { useState } from 'react';
import { Route, Link} from 'react-router-dom';
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
      <Route path="/MovieList" component={MovieList}></Route>
      <Route path="/Movie/id:123" component={Movie}></Route>
    </div>
  );
};

export default App;
