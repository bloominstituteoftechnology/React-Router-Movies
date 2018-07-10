import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './components/Movies/SavedList';
import MovieList from './components/Movies/MovieList';
import Movie from './components/Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    for (let i = 0; i < savedList.length; i++) {
      if (savedList[i].id === movie.id) {
        return;
      }
    }

    savedList.push(movie);

    this.setState({ savedList });
  };

  render() {
    return (
      <div>

        <SavedList list={this.state.savedList} />

        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />

      </div>
    );
  }
}
