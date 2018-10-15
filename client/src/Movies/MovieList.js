import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

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
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const MovieDetails = props => {
  const { title, director, metascore, stars, id } = props.movie;
  return (
    <Link className="movie-card-link" to={`/movies/${id}`}>
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
      />
    </Link>
  );
};
