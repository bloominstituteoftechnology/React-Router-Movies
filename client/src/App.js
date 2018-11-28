// Importing libraries
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Importing components
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
    };
  }

  addToSavedList = movie => {
    const savedList = [...this.state.savedList];
    if (!savedList.find(item => item.id === movie.id)) {
      savedList.push(movie);
      this.setState({ savedList });
    } else (
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(item => item.id !== movie.id)
      }))
    );
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => <Movie {...props} savedList={this.state.savedList} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
