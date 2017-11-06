import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddMovie from './components/addMovie/AddMovie';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  select = (e) => {
    this.setState({ currentIndex: e.target.dataset.index });
  }

  render = () => {
    return (
      <div className="App">
        <Header />
        <AddMovie />
        <Route 
          path="/" 
          exact
          render={(props) => (
            <Home {...props} select={this.select} />
          )} />
        <Route 
          path="/Movie" 
          exact
          render={(props) => (
            <Movie {...props} index={this.state.currentIndex} />
          )} />
      </div>
    );
  }
}
