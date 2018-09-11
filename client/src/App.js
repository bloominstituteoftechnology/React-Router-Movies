import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import NoMatch from './Components/NoMatch'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log(movie)
    // console.log(movie.target.previousSibling.children)
    // console.log(movie.target.previousSibling.children[0].innerText)
    const savedList = this.state.savedList;
    savedList.push({ movie });
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Switch>
        <Route exact path="/" component={MovieList}  />
        <Route path="/movies/:id" render={ (props) => (
          <Movie {...props} addToSavedList={this.addToSavedList} />
        )} />
        <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
