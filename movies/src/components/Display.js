import React from 'react';
import { getMovieByID } from '../actions';
import { connect } from 'react-redux';
import { Component } from 'react';

class Display extends Component {
  componentDidMount() {
    this.props.getMovieByID(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <p>{`Title: ${this.props.film.title}`}</p>
        <p>{`Director: ${this.props.film.director}`}</p>
        <p>{`Metascore: ${this.props.film.metascore}`}</p>
        <p>{`Stars: ${this.props.film.stars}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.movie
  };
};

export default connect(mapStateToProps, { getMovieByID })(Display);
