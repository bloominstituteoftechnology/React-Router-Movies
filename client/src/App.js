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

    let gudToAdd = true;
    console.log(movie.id);

    savedList.forEach( el => {
      if(el.id === movie.id) {
        gudToAdd = false;
      }
    });



    if(gudToAdd) {
      savedList.push(movie);
      this.setState({ savedList });

    } else {
      console.log('ALREADY ADDED');
    }

  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = '/' component = {MovieList}/>
        <Route path = '/movies/:id'
               component = { props => <Movie {...props} addToSavedList = {this.addToSavedList}/>}

        />


      </div>
    );
  }
}
