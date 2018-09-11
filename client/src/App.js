import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route }from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    
    let savedList = this.state.savedList;
    if(!savedList.includes(movie)){
      savedList.push(movie);
    }else {
      savedList = savedList.filter(item => {return item !== movie})
    }
    
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        
        <Route exact path="/movie" 
        render={props => <MovieList {...props} />}
        />
        <Route exact path="/movie/:id" 
        render={props => <Movie {...props} addToSavedList = {this.addToSavedList}/>}/>
      </div>
    );
  }
}
