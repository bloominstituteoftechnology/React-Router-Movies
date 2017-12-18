import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/movies' component = {Movies} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
