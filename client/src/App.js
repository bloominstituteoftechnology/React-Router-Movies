import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route path="/movies/:id " component={Movie} /> */}
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} saveMovie={addToSavedList} />}
      />
    </div>
  );
};

export default App;

// <Route pat="/hoime" render={() => <MyComponent someProp={someData} someOtherProp={moreData} />} />
// pass anon function return whose sole job is to return the component to which we want mounted
// delacring route and want to pass data to next component, pass location, history and match...
// <Route render={(props) => (
//  <MyComponent
//   {...props}
// someProp={someData}
// someotherProp={moreData}
// />
// )} />
// react render helps control state or data in onse spot(app.js)
//
//
