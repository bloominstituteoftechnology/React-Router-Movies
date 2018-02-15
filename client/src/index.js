import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

function Home() {
  return (
    <div>
      <h1>YOU ARE HOME</h1>
    </div>
  );
}

function TheList() {
  return (
    <div>
      <h1>Welcome to The List</h1>
      <MovieList />
    </div>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <NavLink activeClassName="navlink--active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navlink--active" to="/thelist">
            The List
          </NavLink>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/thelist" exact component={TheList} />
      <Route path="/movies/:id" exact component={Movie} />
    </div>
  </Router>,
  document.getElementById("root")
);
