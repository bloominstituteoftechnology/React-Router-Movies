import React, { useState } from 'react';
import  Movie  from "./Movies/Movie.js"; 
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Route } from "react-router-dom"; 

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      {/* Added this  */}
      <Route path="/" exact component={MovieList} /> 
      <Route path="/movies/:id" component={Movie} /> 
      {/* Added this */}
    </div>
  );
};

export default App;
