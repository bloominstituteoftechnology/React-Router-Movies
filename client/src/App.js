import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {

// const Index = props => (
//   <h1>{props.something}</h1>
// )

// <Route path="/" render={() => <Index A/B/C={'here'} />} />



  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.some(savedMovie => savedMovie.id === movie.id)) {
      savedList.push(movie);
      this.setState({ savedList });    }
  };

  render() {
    return (
      <div>
          <SavedList list={this.state.savedList} />
          <Route exact path="/" component={MovieList}></Route>
          {/* <Route path="/movies/:id" component={Movie}></Route> */}
          <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList}/>} />

      </div>
    );
  }
}

