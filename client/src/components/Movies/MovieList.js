import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setMovies } from '../../actions';

class MovieList extends Component {
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/movies`)
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #000;
  }
`

function MovieDetails({ movie }) {
  return (
    <StyledLink to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </StyledLink>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { setMovies })(MovieList);