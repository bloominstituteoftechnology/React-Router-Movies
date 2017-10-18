import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-movie" component={AddMovie} />
          <Route path="/:id" component={Movie} />
        </Switch>
      </div>
    );
  }
}

export default App;
