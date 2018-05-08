import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <ul>
          <li>
            <Link to="/movielist">Movie List</Link>
            <Link to="/movie/:id"></Link>
          </li>
        </ul>
        <Route path="/movielist" component={MovieList}/>
        <Route path="/movie/:id" component={Movie}/>
      </div>
    );
  }
}
