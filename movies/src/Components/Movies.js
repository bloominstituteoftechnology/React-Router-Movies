import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../Actions';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

}

export default Movies;