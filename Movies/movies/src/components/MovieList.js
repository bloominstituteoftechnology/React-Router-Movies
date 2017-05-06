import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, selectMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return(
      <div>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
                <li className="movietitle" key={i} /*onClick={() => this.props.selectMovie(`${movie.id}`)}*/>
                <Link to={`/movies/${movie.id}`} >{movie.title}</Link>
                <span className="year">{movie.year}</span>
                </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, { getMovies, selectMovie })(MovieList);
