import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import data from './data'

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
        
        {/*  */}<SavedList list={this.state.savedList} />
        <Route 
        exact path="/"
        render={props => <MovieList {...props} movieListData={data} />}
        />
        <Route 
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={this.addToSavedList} movieListData={data} />}
        />
      </div>
    );
  }
}
