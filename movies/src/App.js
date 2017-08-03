import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import MoviesList from './components/MoviesList';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ MoviesList }/>
        <Route path="/movies/:id" component={ Display }/>

      </div>

    );
  }
}

export default App;
