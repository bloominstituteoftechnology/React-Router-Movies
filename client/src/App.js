// Import Dependencies
import React, { useState } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

// Import Components
import SavedList from './Movies/SavedList';
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
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;


{/* <nav>
<NavLink to="/">MovieList</NavLink>
<NavLink to="/movies/">Movie</NavLink>
</nav> */}