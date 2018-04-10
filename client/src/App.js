import React, { Component } from 'react';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Browser as Router,
Route
} from 'react-router-dom';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        {/* passing named props to a react Route component */}
        {/* https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202 */}
        <Route exact path="/movies/:id" render={(props) => <Movie addToSavedList={this.addToSavedList} {...props} />} /> 
      </div>
    );
  }
}
