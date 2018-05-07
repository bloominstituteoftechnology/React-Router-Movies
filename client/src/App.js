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
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path="/" component={MovieList} />
        {/* <Route path="/movies/:id" component={Movie} /> */}
        {/* <Route path="/movies/:id" component={Movie} save={this.addToSavedList} /> */}
        <Route path="/movies/:id" render={(props) => <Movie routeProp={props} save={this.addToSavedList} /> } />
      </div>
    );
  }
}
