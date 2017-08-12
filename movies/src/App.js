import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import MovieDetail from './Components/MovieDetail';
import Navigation from './Components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route exact path="/movies" component={Movies}/> 
      <Route path="/movies/:id" component={MovieDetail}/> 
      </div>
    );
  }
}

export default App;
