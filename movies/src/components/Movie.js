import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions';
import { bindActionCreators } from 'redux';

class Movie extends Component {
  render() {
    const stars = this.props.movie.stars ? this.props.movie.stars : [];
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <h4>Director: {this.props.movie.director}</h4>
        <h4>Metascore: {this.props.movie.metascore}</h4>
        <h4>Stars: {stars.map((item, i, arr) => {
          if(i === arr.length - 1) return item + '.'
          return item + ', '}
        )}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
