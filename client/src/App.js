import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route, Switch } from 'react-router-dom';


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
  const savedList = this.state.savedList;

    //! comparing objects is tricky
    //! if different memory locations, they are !=
    // if (!savedList.includes(movie.id)) {
    //   savedList.push(movie);
    //   this.setState({ savedList });
    // }

    for (let i = 0; i < savedList.length; i++) {
      if (savedList[i].id === movie.id) {
        return; // we have one, don't add it to the array
      }
    }
    // add new movie to the array

      savedList.push(movie);
     this.setState({ savedList });
   };	   

	render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
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
