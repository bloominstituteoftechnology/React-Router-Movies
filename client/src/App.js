import React, { Component } from 'react';
import {Route} from "react-router-dom"; /*Importing the route component from react router dom*/

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

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} /> {/*Setting the route at "/" to generate the component "MovieList"*/}
        <Route exact path="/movies/:id" component={Movie} /> {/*Setting the route at "/movies/" to generate the component "Movie" where each movie is assigned a dynamic id that is placed in the route after /movies/*/}
      </div>
    );
  }
}
