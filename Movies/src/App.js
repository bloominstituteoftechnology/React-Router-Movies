import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
