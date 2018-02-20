import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectMovie } from '../actions';
import { NavLink } from 'react-router-dom';

class Movie extends Component {

  componentDidMount() {
    this.props.getSelectMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.selectMovie === null) return null;
    return (
      <div>
        <NavLink to="/movies">Back</NavLink>
        <h2>{this.props.selectMovie.title}</h2>
        <div>{this.props.selectMovie.director}</div>
        <div>{this.props.selectMovie.metascore}</div>
        {this.props.selectMovie.stars.map((star, i) => {
          return <li key={i}>{star}</li>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      selectMovie: state.selectMovie
  };
};

export default connect(mapStateToProps, { getSelectMovie })(Movie);