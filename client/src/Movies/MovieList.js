import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import MovieCard from './MovieCard';
import {NavLink} from 'react-router-dom';

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

  onHomeClick = () => {
    console.log('something');
  }

  render() {
    return (
      <div className="movie-list">
        <button onClick={this.onHomeClick}>Home</button>
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  const {id} = movie;

    return (
  <NavLink to={`/movies/${id}`}>
    <MovieCard movie={movie} />
  </NavLink>
  )
}
