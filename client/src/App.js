import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import List from './Movies/List';
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
        <div>Replace this Div with your Routes</div>
      </div>
    );
  }
}