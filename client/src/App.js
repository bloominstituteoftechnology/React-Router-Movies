import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

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

  render() { console.log(this.addToSavedList);
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
          <Route path="/movies/:id" render={ (RouterProps) => {
          return(<Movie {...RouterProps} addToSavedList={this.addToSavedList}/>)
        }} />
          {/* <Route path="/movies/:id" render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList}/>)}/> */}
        </div>
      </div>
    );
  }
}
