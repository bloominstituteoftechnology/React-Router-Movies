import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import MovieDetails from './pages/movie-details';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/movies/:id" component={MovieDetails}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;