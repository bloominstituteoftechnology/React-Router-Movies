import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path = {'movies/:id'} component = {Movie} /> 
        <Route exact path = '/movies' component = {Movies} /> 
        <Route exact path = '/' component = {Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
