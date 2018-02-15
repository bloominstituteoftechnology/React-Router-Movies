import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/MovieList" activeClassName="navLink--active">
            Movielist
          </NavLink>
        </li>
        <li>
          <NavLink to="/Movie/:id" activeClassName="navLink--active">
            Movie
          </NavLink>
        </li>
      </ul>
      <h1> Application running, add your routing </h1>
      <Route path="/MovieList" component={MovieList} />
      <Route path="/Movie/:id" component={Movie} />
    </div>
  </Router>,
  document.getElementById("root")
);
