import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList.slice();
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Switch>
          <Route exact path='/' component={MovieList}/>
          <Route path='/movie/:id' render={ (props) => <Movie {...props}  addToSavedList={this.addToSavedList}/>}  />
        </Switch>
      </div>
    );
  }
}
