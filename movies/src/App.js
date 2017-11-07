import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { MovieItem, MovieList } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={MovieList} />
        <Route path="/:movieItem" component={MovieItem} />
      </div>
    );
  }
}

export default App;
