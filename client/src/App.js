import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './components/Movies/SavedList';
import MovieList from './components/Movies/MovieList';
import Movie from './components/Movies/Movie';
import { connect } from 'react-redux';
import { setSavedMovies } from './actions';
import { withRouter } from 'react-router-dom';

class App extends Component {
  addToSavedList = movie => {
    const savedList = this.props.savedList;
    for (let i = 0; i < savedList.length; i++) {
      if (savedList[i].id === movie.id) {
        return;
      }
    }

    this.props.setSavedMovies(movie);
  };

  render() {
    return (
      <div>

        <SavedList list={this.props.savedList} />

        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedList: state.savedList
  }
}

export default withRouter(connect(mapStateToProps, { setSavedMovies })(App));
