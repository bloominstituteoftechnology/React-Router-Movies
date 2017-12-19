import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={MoviesList} />
          <Route path="/movies/:id" component={MovieDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
