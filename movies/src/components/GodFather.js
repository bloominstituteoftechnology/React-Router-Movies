import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class GodFather extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <ul>
        {this.props.movies.map((movie, i) => {
          return (
            <GodFather key={i} index={i} movie={movie} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(GodFather);

const GodFather = () => {
    return (
        <li>
            <p>{`Title: ${movie.title}`}</p>
            <p>{`Director: ${movie.director}`}</p>
            <p>{`Metascore: ${movie.metascore}`}</p>
            <p>{`Stars: ${movie.stars}`}</p>
        </li>
    );
};

export default GodFather;