import React, { useState } from 'react';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import { Route, Link } from 'react-router-dom';


const App = () => {

  const [savedList, setSavedList] = useState( [] );
  
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  // console.log(addToSavedList);

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Link exact to ='/movies/:id' > Movies</Link>

        <Route exact path="/" component={MovieList}/>
        <Route path = '/movies/:id' component = {Movie}/>
         {/* <Route exact path="/movies/:id" render = {props => <Movie {...props} />}/> 
          <Route exact path="/movies/:id" render = {props => <Movie {...props}  banana={savedList}/>}/>  */}
      </div>
    </div>
  );
};

export default App;
