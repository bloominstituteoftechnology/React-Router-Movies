import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieInfo from './components/MovieInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MoviesList}/>
          <Route path="/:id" component={MovieInfo}/>
        </div>
      </Router>
    );
  }
}

export default App;
