
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

  addToSavedList = movie => {
    const savedList = this.state.savedList;
      if (!this.state.savedList.map(movie => {
        return movie.id
      }).includes(movie.id)) {
        console.log('First time that the movie gets added onto the array.');
        savedList.push(movie);
        this.setState({ savedList });
      }
      else if (this.state.savedList.map(movie => {
        return movie.id
      }).includes(movie.id)) {
        for (let i; i === savedList[i]; i++) {
          if (savedList[0] === movie) {
            savedList.splice(0, 1);
            this.setState({ savedList });
            console.log('Third condition ran.')
            return;
          } else if (savedList[i] === movie) {
            savedList.splice(i, 1);
            this.setState({ savedList });
            console.log('Fourth condition ran.')
            return;
          }  
          console.log('Duplicate');
    }
  }

    
    // else if (!savedList.includes(movie)) {
    // savedList.push(movie);
    // this.setState({ savedList });
    // } 
    
      else if (savedList.includes(movie)) {
      for (let i = 0; i < savedList.length; i++) {
        if (savedList[0] === movie) {
          savedList.splice(0, 1);
          this.setState({ savedList });
          console.log('First condition ran.')
        } else if (savedList[i] === movie) {
          savedList.splice(i, 1);
          this.setState({ savedList });
          console.log('Second condition ran.')
        }
      }
    }
    return;
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route 
          exact path="/movies/:id" 
          render={props => <Movie 
            {...props} 
            addToSavedList={this.addToSavedList}
          />}
        />
        <Route path="/" component={MovieList} />
      </div>
    );
  }
}
