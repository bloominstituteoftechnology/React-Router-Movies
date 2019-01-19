import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route,Link} from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log("Saving movie " + movie)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  //Hello
  render() {
    return (
      <div>

        <Route exact path ="/"  render={(props)=><MovieList {...props} handlerFunc={this.addToSavedList}/>}/>
        <Route path="/movies/:id" render={(props)=><Movie {...props} handlerFunc={this.addToSavedList}/>}/>
        <SavedList list={this.state.savedList}  />

        <div>Replace this Div with your Routes</div>
      </div>
    );


  }
}
