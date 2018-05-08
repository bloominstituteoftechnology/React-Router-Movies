import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      // duplicateMovieError: ""
      idArray: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    // if (savedList.indexOf(movie) === -1) {
      if(this.state.idArray.includes(movie.id) === false) {
        savedList.push(movie);
        this.state.idArray.push(movie.id)
        console.log('movie pushed')
        this.setState({ savedList }); 
      }
    // else {this.setState({duplicateMovieError: "Already saved!"})}
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} /> {/*at home route, movie list component gets displayed*/}
        {/* <Route path="/movies/:id" component={Movie}/> */}
        <Route path="/movies/:id" render={(props) => (
            <Movie {...props} addToSavedList={this.addToSavedList} />  )} />
      </div>
    );
  }
}
