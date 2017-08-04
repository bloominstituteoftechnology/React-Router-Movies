import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';


class MoviesTitle extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <li key={i}>
                <p>{`Title: ${movie.title}`}</p>
             </li>
           );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, {getMovies})(MoviesTitle);
