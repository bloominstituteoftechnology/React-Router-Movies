import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
    let found = false;
    
    savedList.forEach(savedMovie => {
      if (savedMovie.id === movie.id){
        found = true;
      }
    });

    if(!found){
      savedList.push(movie);
      this.setState({ savedList });
    }
  };
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = "/" component = {List}/>
        <Route exact path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList}/>}></Route>
      </div>
    );
  }
}