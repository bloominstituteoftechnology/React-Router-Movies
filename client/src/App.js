import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route exact path="/" component={MovieList} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
