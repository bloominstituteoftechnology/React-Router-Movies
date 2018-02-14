import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
