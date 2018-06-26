import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import NoMatch from './Movies/NoMatch';
import { Route, Link, Switch } from 'react-router-dom';

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
        <SavedList list={this.state.savedList}/>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movies/:id' render={props => ( <Movie {...props} 
          addToSavedList={this.addToSavedList}  /> )} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
