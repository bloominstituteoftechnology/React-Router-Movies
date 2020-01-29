import React, { useState } from 'react';
import {Route} from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from "./Movies/MovieCard";
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/"><MovieList/></Route>
      <Route path="/movies/:id"><Movie/></Route>
    </div>
  );
};

export default App;
