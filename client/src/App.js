import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieLayout from './Movies/Movie';
import { Route } from 'react-router-dom';

const Movie = props => <MovieLayout {...props} />;
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
        <div>
          {/* Exact path is needed otherwise the list will show on every page */}
          <Route
            exact
            path="/"
            render={props => (
              <MovieList
                {...props}
                addToSavedList={movie => this.addToSavedList(movie)}
              />
            )}
          />
          <Route
            path="/movies/:id"
            render={props => (
              <Movie
                {...props}
                addToSavedList={movie => this.addToSavedList(movie)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
