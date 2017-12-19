import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
