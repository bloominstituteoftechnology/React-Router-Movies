import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../actions';

class MovieDetail extends Component {
  componentDidMount() {
    this.props.setSelectedMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.selectedMovie === null) return null;
    return (
      <div>
        <h1>{this.props.selectedMovie.title}</h1>
        <h3>MetaScore: {this.props.selectedMovie.metascore}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { setSelectedMovie })(MovieDetail);