import React, { useState } from "react";

// import Route from React
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
// import Movie & MovieList components
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
            <Route exact path="/" render={() => <MovieList />} />
            <Route path="/movies/:movieID" render={props => <Movie items={savedList} {...props} />} />
        </div>
    );
};

export default App;
