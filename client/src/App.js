import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = ({ title }) => {
    const savedList = this.state.savedList;
    if (!savedList.includes(title)) {
      savedList.push(title);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => {
          return (
            <Movie {...props} 
              addToSavedList={this.addToSavedList} 
             />
           )
          }}
        />
      </div>
    );
  }
}
