import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import {Link, Switch, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
 


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/' component={MovieList}/>

        <Route path='/movie/:itemID'>
          <Movie/>
        </Route>

      </div>
    </div>

  );
};

export default App;

