import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    let savedList = this.state.savedList;
	  
    let newMovieList = savedList.filter(item => item.id === movie.id);

    if (newMovieList.length > 0) return;
    else savedList.push(movie);	  
    this.setState({ savedList: savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
	<Route path="/movies/:id"  render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />   
      </div>
    );
  }
}
