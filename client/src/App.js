
import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    console.log(savedList);
    if(!savedList.some(elem => { return JSON.stringify(movie) === JSON.stringify(elem); })){
      setSavedList( [...savedList, movie] );
    }else{
      alert(`You already saved ${movie.title}!`);
    }
    
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList}/>
      <Route path='/movies/:id' render={(props) => (
        <Movie 
          {...props}
          addToSavedList={addToSavedList}
        />
      )} />
    </div>
  );
};

export default App;