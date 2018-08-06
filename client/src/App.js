import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';

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
    const savedList = this.state.savedList.slice();
    if(!savedList.includes(movie)){
      savedList.push(movie);
    } else {
      const index = savedList.indexOf(movie)
      savedList.splice(index, 1);
    }
    
    this.setState({ savedList });
  };

  render() {
    return (
      <Fragment>
        <SavedList list={this.state.savedList} />
        <Route exact path = '/' component = {MovieList} />
        <Route path = '/movies/:id' render = {(props) => <Movie {...props} addToSavedList ={this.addToSavedList}/>}/> 
      </Fragment>
    );
  }
}
