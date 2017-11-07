//import React from 'react';
import { connect } from 'react-redux';
import Movies from './Movies'
import {getMovies} from '../actions'
const mapStateToProps = (state) => {
    return {
      movies: state.movies
    }
  }
  /*
  const MoviesContainer = () => {
    return (
      <Movies />
    );
  }
  */
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMovies: () => dispatch(getMovies())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(Movies);


