import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";
import Movielist from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <Movielist />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
      {/* <Route path='/movies/:id' render={props => ( <Movie {...props} addToSavedList={addToSavedList}/>)}/>
      {/* <Route path="/movies/:id" component={Movie}/> */}
    </div>
  );
};

export default App;
