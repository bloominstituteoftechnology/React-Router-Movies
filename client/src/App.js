import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';

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
        <Route path='/movies/:id' render={props => <MovieCard id={props.match.params.id} addToSavedList={addToSavedList} save/>}/>
      </div>
    </div>
  );
};

export default App;
