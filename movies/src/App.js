import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To The Movie World</h1>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    );
  }
}

export default App;
