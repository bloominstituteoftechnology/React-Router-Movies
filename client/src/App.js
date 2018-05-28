import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

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
  //   console.log("movie: ", movie)
  //   const savedList = this.state.savedList;
  //   console.log("savedList: ", savedList)
  //   if (savedList.includes(movie)){
  //     return
  //   } else {
  //     savedList.push(movie);
  //     this.setState({ savedList });
  //   }
  // };


  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let found = false;
    
    savedList.forEach(savedMovie => {
      if (savedMovie.id === movie.id){
        found = true;
      }
    });

    if(!found){
      savedList.push(movie);
      this.setState({ savedList });
    }
  };


  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Switch>
          <Route exact path='/' component={MovieList}/>
          <Route path='/movie/:id' render={ (props) => <Movie {...props}  addToSavedList={this.addToSavedList}/>}  />
        </Switch>
      </div>
    );
  }
}
