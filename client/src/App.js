import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = (event, movie) => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        {/* <Route path="/movies/:id" component={Movie} /> */}
        <Route path="/movies/:id" 
          component={props => 
            <Movie 
              addToSavedList={this.addToSavedList} 
              {...props} 
            />
          }
        />
        {/* <Route path="/movies/:id" component={ (props) =>  <Movie addToSavedList={this.addToSavedList}/> } */}
        
      </div>
    );
  }
}
