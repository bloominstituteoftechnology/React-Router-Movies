{/* My understanding of this document is that it should contain everything else - like everything should be referred to or called from in here. This is what runs the app. */}

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

  {/* I am fairly sure that lines 9-15 were already there so I cannot take any credit for them. My understanding is that the purpose of these lines is to make sure that savedList is an empty array before we start putting stuff into it */}
  
  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  // I'm pretty sure the addToSavedList method was already here, too. I think what this does is push movies into the savedList and then set it into "state" so that the current saved list is up-to-date
  
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
	<Route exact path="/" component={ MovieList }></Route>
        <Route path="/movies/:id" render={(props) => (
	  <Movie {...props} addToSavedList = {this.addToSavedList} />
	)} />
      </div>
    );
  }
}

//The render part puts your savedList into state, makes sure that when you click on Home you get sent home, and runs the addToSavedList method.
//This is connected with the saveMovie method in Movie.js, which refers ack to the addToSavedList method, so that when someone clicks on a movie it gets saved.
//Lines 32-33 are 100% Zach. I might have gotten line 32 eventually but would have never gotten line 33 because I had zero understanding of the ... thing until we talked about it a little in class today. Now I at least know what it is but would like more examples where I can see it work in action.
