import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path='/' component={MovieList} exact/>
        <Route path='/movies/:id' render={props => <Movie id={props.match.params.id} addToSavedList={addToSavedList}/>}/>
      </div>
    </div>
  );
};

export default App;
