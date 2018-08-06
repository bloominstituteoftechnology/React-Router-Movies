import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';

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
    const savedList = this.state.savedList.slice();
    const titleOfMovies = [];
    if(savedList.length){
      //only if savedList has items in it is this neccessary. 
      //objective is to make sure you cannot add more than one movie into the saved List if its the same there is no need to add another. 
      for (let item in savedList){
        titleOfMovies.push(savedList[item].title);
      }
      
    }
    if(!titleOfMovies.includes(movie.title)){
      savedList.push(movie);
     } 
    
    this.setState({ savedList });
  };

  render() {
    return (
      <Fragment>
        <SavedList list={this.state.savedList} />
        <Route exact path = '/' component = {MovieList} />
        <Route path = '/movies/:id' render = {(props) => <Movie {...props} addToSavedList ={this.addToSavedList}/>}/> 
      </Fragment>
    );
  }
}
