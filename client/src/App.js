import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movieInList: null
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const findMovie = savedList.find(el => movie.id === el.id);
    if (findMovie) {
      this.setState({ movieInList: `You've already saved that movie!` });
      setTimeout(() => this.setState({ movieInList: null }), 2000);
    } else {
      savedList.push(movie);
    }

    this.setState({ savedList });
  };


  render() {
<<<<<<< HEAD
    console.log(this.props);
=======
    const { movieInList } = this.state;
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
    return (
      <div>
        {movieInList !== null ? (
          <h3 className="movie-warning">{movieInList}</h3>
        ) : null}
        <SavedList list={this.state.savedList} />
<<<<<<< HEAD
        <div>
          <Route exact path = "/" component = {MovieList}/>
          <Route path = "movies/:id" component = {MovieList}/>
          
        </div>
=======
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
      </div>
  
    );
  };
}
