import React, { Component } from 'react';
import   {AllMovies, SelectedMovie}   from './components';
import {Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header"><h1><span>LAMBDA SCHOOL:</span> SPA/ROUTING</h1><div><span>Movies</span> Created By: Brandon Fizer</div></div>
        <div id="wrapper-main">
          <Route exact path="/" component={AllMovies}/>
          <Route path="/:id" component={SelectedMovie} />
        </div>
        <div id="footer">Copyright 2017 Track Seven Entertainment & Designs</div>
      </div>
    );
  }
};


