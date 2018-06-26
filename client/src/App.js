import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
    if(!this.state.savedList.map(movie => movie.id).includes(movie.id)){
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState({ savedList });
    }

    else {
      const index = this.state.savedList.map(movie => movie.id).indexOf(movie.id);
      console.log(index);
      if(this.state.savedList.length <= 1){
        this.setState({savedList: []})
      }
      else{
        const newSavedList = this.state.savedList;
        this.setState({ savedList: newSavedList.splice(index - 1, 1) });
      }

    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
