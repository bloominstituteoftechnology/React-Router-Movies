import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { NavLink } from 'react-router-dom';

class MovieItem extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log(this.movies);
    return (
        <div>
              {/* <p>{movies[0].title}</p>
              <p>{movies[0].director}</p>
              <p>{movies[0].metascore}</p>
              <p>{movies[0].stars}</p> */}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MovieItem);