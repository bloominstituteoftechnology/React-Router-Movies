//import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie'
import {getMovie} from '../actions'
/*
const MovieContainer = () => {
    return (
      <Movie />
    );
  }
  */
const mapStateToProps = (state) => {
    return {
      movie: state.movie
    }
  }
  const mapDispatchToProps = (dispatch,ownProps) => {
      console.log(`movie mapDispatchToProps ownProps match id: ${ownProps.match.params.id}`)
    return {
      fetchMovie: () => dispatch(getMovie(ownProps.match.params.id))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);