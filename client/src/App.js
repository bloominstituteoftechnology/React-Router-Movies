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
    let found = false; //always want found to be false so we can add to array...if found, remark already found
    
    savedList.forEach(savedMovie => {
      if (savedMovie.id === movie.id){
        found = true;
        return
          {`Movie already added to list!`}
      }
      else {
        savedList.push(movie);
        this.setState({ savedList });
      }
      
    });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = "/" component = {List}/>
        <Route path="/movies/:id" component={Movie} />
      </div>
    );
  }
}