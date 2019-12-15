import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie.js";
import MovieCard from "./Movies/MovieCard";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
     
      <SavedList list={savedList} />
     
      <div> 
        
        <Route exact path="/Home" component={MovieList} />
        <Route exact path="movie" component={Movie} />
        {/* <Route render = props => {
          <Movie {...props} movie={saveList}/>

         } = />  */}
        <Route path='/movies/:id' component={Movie} />
        
      </div>
    </div>
  );
};

export default App;
