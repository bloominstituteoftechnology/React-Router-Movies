import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Link}from 'react-router-dom';
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
        <Route exact path='/' component={MovieList}/>
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList}/>} />
        {/* <Route path='/movies/:id' component={Movie}/> */}
        {/* <div><Link to="/"> Movie List </Link></div>
        <div><Link to="/movie/:id"> Movie </Link></div> */}
      </div>
    );
  }
}
