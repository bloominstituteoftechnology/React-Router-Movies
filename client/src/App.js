import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { Navigation, MovieList, Movie } from "./Movies";

const App = () => (
  <div>
    <h1>Hi world</h1>
    <Navigation />
    <Route exact path="/" component={MovieList} />
    <Route path="/movies/:id" component={Movie} />
  </div>
);

export default App;
