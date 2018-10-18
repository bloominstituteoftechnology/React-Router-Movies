import React, { Component } from 'react';
import {Route} from "react-router-dom"

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

//App.js renders movies based on two paths
//path="/" is exact to avoid multiple renders when clicking movies

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    console.log(savedList);
    savedList.push(movie);
    console.log(savedList);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" 
          component={MovieList} />
        <Route 
          path="/movies/:id" 
          render={(props) => <Movie {...props} save={this.addToSavedList}/>}
        />
      </div>
    );
  }
}
