import React, { Component } from 'react';
import {  Route } from "react-router-dom";


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
//Note the spread attribute htis allows you to take in all of the declard prop.
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component ={MovieList}/>
        <Route path = "/movies/:id" render = {(props) => {
          return (<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }
        }/>
      </div>
    );
  }
}
