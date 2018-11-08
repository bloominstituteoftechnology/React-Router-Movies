import React, { Component } from 'react';
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
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  handleClick = () => {
  //do i add a route?

  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList}
                   onclick={this.handleClick}  />
        <div>
          <Route exact path="/" component={MovieList}/>
          <Route path="/movies/:id" render={props =>
          <Movie {...props} addToSavedList={this.addToSavedList}/>


} />        
      </div>

        </div>
    );
  }
}

