import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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

  // addToSavedList = movie => {
  //   const savedList = this.state.savedList;
  //   savedList.push(movie);
  //   this.setState({ savedList });
  // };

  addToSavedList = movie => {
    // console.log((document.querySelector('.movie-card').children[0].innerHTML));
    const newSavedList = this.state.savedList;
    newSavedList.push((document.querySelector('.movie-card').children[0].innerHTML));
    this.setState({
      savedList: newSavedList,
     });
     console.log(this.state.savedList);
  };
  clearSavedClick = e => {
    this.setState({
      savedList: [],
    });
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} clearSaved={this.clearSavedClick} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path= '/' render={() => <MovieList />} />
        <Route path='/movies/:id' render={ (props) => <Movie onClick={this.addToSavedList} {...props} />} />
      </div>
    );
  }
}
