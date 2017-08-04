import React, { Component } from 'react';
import './App.css';
import MoviesList from './containers/MoviesList';
import ViewDetails from './components/ViewDetails';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ MoviesList }/>
        <Route path='/movies:id' component={ ViewDetails }/>
      </div>
    );
  }
}

export default App;
