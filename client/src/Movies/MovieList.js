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
    if (!this.state.movies) {
      return <div>Loading movie information...</div>;
    }
    return (
       <MovieCard values={this.state.movies} />
    );
  }
}
