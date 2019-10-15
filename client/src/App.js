import React, { useState } from 'react';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
import {Route} from "react-router-dom";



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ="/" render = {(props) => <MovieList addToSavedList ={addToSavedList}{...props}/>}/>
      <Route  path ="/movies/" render = {(props)=><Movie addToSavedList={addToSavedList} {...props} />}/>
      <Route path ="/movies/:id" render = {(props)=><MovieCard addToSavedList={addToSavedList} {...props} />}/>
   
    
    </div>
  );
};

export default App;
