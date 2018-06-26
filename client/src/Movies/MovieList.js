import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
        width: 40%;
        margin: 0 2.5% 2.5% 2.5%;
    }
`;

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          < MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <StyledLink to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </StyledLink>
  );
}
