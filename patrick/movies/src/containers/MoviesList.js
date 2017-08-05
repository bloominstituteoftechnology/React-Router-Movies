import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from '../actions'; // <~~ '../actions/index.js'
import Movie from '../components/Movie';


class MoviesList extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <ol>
        { this.props.movies.map((movie, i) => {
          return (
            <Movie key={ i }
                  //  index={ i } // not sure if I need this...?
                   movie={ movie } />
        );}) }
      </ol>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllMovies: getMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
