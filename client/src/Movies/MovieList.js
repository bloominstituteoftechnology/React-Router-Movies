import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

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
        {this.state.movies.map((movie, i) => (
            <div key={i} onClick={() => this.props.history.push(`/movies/${movie.id}`)}>
            <MovieCard key={movie.id} movie={movie} />
            </div>
        ))}
      </div>
    );
  }
}