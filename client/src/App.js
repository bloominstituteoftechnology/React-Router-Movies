import React, { Component } from 'react';
import { Route } from "react-router-dom";

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
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  handleClearSaved= event => {
    event.preventDefault();
    let saved = this.state.savedList.slice();
    saved = [];
    this.setState({savedList: saved});
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} clear={this.handleClearSaved} />
        <Route exact path="/" component={MovieList}></Route>
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} ></Route>
      </div>
    );
  }
}

