import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [id, setId] = useState();
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>

        <Switch>
        <Route exact path='/'><MovieList set={setId}/></Route>
        <Route path={`/movies/${id}`}>
        <Movie key={id} id={id}/> 
        </Route>

</Switch>

      </div>
    </div>
  );
};

export default App;
