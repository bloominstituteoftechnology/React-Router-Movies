import React, { Component } from 'react';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Browser as Router,
Route
} from 'react-router-dom';
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
        <Route exact path="/" component={ MovieList } > </Route>
    <Route exact path ="/movies/:id" component={ Movie } > </Route>
      </div>
    );
  }
}
