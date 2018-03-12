import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MovieList extends React.Component {
  state = {
    movies: [],
  };

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
  F;

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieCard({ movie }) {
  const { title } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
