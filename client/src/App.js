import React, { Component } from 'react';
import { Route } from 'react-router';
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
    let newItem = true;
    const savedList = this.state.savedList;
    savedList.map(item => {
      if (movie.title === item.title) {
        newItem = false;
      }
    })
    if(newItem) {
    savedList.push(movie);
    this.setState({ savedList });
  }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
      <Route path='/' exact
             component={() => <MovieList onClick={this.addToSavedList}/>}>

      </Route>
    <Route path='/movies/:id' component={(props) => <Movie addToSavedList={this.addToSavedList} {...props} />}></Route>
      </div>
    );
  }
}
