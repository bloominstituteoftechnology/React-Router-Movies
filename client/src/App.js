import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
const App = () => {
  //hook statement savedList, with initial value of empty array
  const [savedList, setSavedList] = useState( [] );
// setting a variable equal to the result of the function running setSavedList passing savedList from ./Movies/SavedList with the ... to give it all the properties we want like history and match and stuff? something like that
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
//returning savedList passing the new contents of SavedList from addToSavedList as props??
  return (
    <div>

      <SavedList list={savedList} />
      <Route exact path = "/" component= {MovieList}/>
      <Route path = "/movies/:id" component = {Movie}/>
    </div>
  );
};

export default App;
