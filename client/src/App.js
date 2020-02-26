import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const ToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path ='/'>
        <MovieList />
      </Route>

      <Route path="/movies/:moiveID">
        <Movie ToSavedList={ToSavedList}/>
      </Route>
    </div>
  );
};

export default App;
