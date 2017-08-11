import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
//import MovieInfo from './components/MovieInfo';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesList/>
        {/* <Route path="/about" component={MovieInfo}/> */}
      </div>
    );
  }
}

export default App;
