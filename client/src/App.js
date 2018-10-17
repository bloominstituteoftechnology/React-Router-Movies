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
    const savedList = this.state.savedList.map(item => item);
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" 
        render={
          props => (
            <MovieList 
            {...props}
            items={this.state.items}
            />
          )} />
        <Route
        path="/movies/:id"
        render={
          props => (
           <Movie
           {...props}
           items={this.state.items} 
           addToSavedList={(movie) => {this.addToSavedList(movie)}}
           />
          )} />
      </div>
    );
  }
}
