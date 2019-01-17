import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

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

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">

      <h2>
        <Link to={`/movies/${movie.id}`}>{title}</Link>
      </h2>
      <MovieCard movie = {movie}/>
    </div>
  );
}
