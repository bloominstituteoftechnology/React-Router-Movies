import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { BrowserRouter as Router, Route} from 'react-router-dom'

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
        <div className="App">
            <nav>
                <a href="/">Home</a>
                <br/>
                <a href="/MovieList">Movies List</a>
            </nav>
            <Route path="/Movies/:id" componnet={Movie} />
            <Route path="/MovieList" component={MovieList} />
        </div>
      </div>
    );
  }
}
