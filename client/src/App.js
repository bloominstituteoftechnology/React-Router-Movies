import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from "./Movies/Movie";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
        </div>
      </div>
    );
  }
}


function Home() {
  return (
    <div className="home-page">
      <h1>Avengers Database</h1>
      <h4>Enter below:</h4>
      <p>Warning: this data is classified!</p>

      <Link to="/movies">Enter!</Link>
    </div>
  );
}
