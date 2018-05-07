import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';

>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
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
          <Link to = {`/movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} /></Link>
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  const { id } = movie;
  return (
    <NavLink to={`/movies/${id}`}>
      <MovieCard movie={movie} />
    </NavLink>
  );
}
