import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovieDetailsByID } from '../actions';

class MovieDetails extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <p> { `${this.props.movieDetails.title}` }</p>
        <p> { `${this.props.movieDetails.metascore}` }</p>
        <p> { `${this.props.movieDetails.stars}` }</p>
        <p> { `${this.props.movieDetails.director}` }</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieID
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMovieDetails: getMovieDetailsByID
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
