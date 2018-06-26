import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movieList: null
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const findMovie = savedList.find(item => movie.id === item.id);
    if(findMovie) {
      this.setState({movieList: "Movie already saved!"});
      setTimeout(() => this.setState({movieList: null}), 2000);
    } else {
      savedList.push(movie);
    }
    this.setState({ savedList });
    console.log("added");
  };

  render() {
    const {movieList} = this.state;
    return (
      <div>
        {movieList !== null ? <h3 className="movie-warning">{movieList}</h3> : null}
        <SavedList list={this.state.savedList} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}  
        />
      </div>
    );
  }
}
