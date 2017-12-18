import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To The Movie World</h1>
        <Link to="/movies">Movies</Link>
      </div>
    );
  }
}

export default App;
