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
        <h1>Must-Watch Movie Queue:</h1>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
                <li className="movietitle" key={i}>
                <input type='number' name='queueposition' value={movie.id+1}/>
                <Link to={`/movies/${movie.id}`} >{movie.title}</Link>
                <span className="year">{movie.year}</span>
                </li>
            );
          })}
        </ul>
        <Link to="/new-movie">Add A Movie</Link><br/>
        <Link to="/movies">Back</Link>
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
