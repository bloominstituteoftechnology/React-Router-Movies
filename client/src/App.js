import React, { useState } from 'react';
import {BroserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css'
import SavedList from './Movies/SavedList'
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <ul>
          <li>
          <Link to = '/MovieList/'>MovieList</Link>
          </li>
          <li>
          <Link to ={'Movie/'}>Movie</Link>
          </li>
        </ul>
      </div>
        <Switch>
          <Route path = '/' exact component = {MovieList} />
          <Route path = '/Movie'exact component = {Movie} />
        </Switch>
    </Router>
  );
};

export default App;
