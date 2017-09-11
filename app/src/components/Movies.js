import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import './Movies.css';

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <div className="movies_wrapper">
        <div className="movies_container">
          {movies.map((movie, i) => {
            return (
              <div key={i} className="poster">
                <Link to={`/movies/${movie.id}`}>
                  <img alt className="img_wrap" src={movie.poster} />
                  <br />
                  <span>{movie.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state
});

export default connect(mapStateToProps, { getMovies })(Movies);
