import React, { Component } from 'react';
// import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import movies from '../movie_data'
import MovieCard from './MovieCard'

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
          <MovieCard 
          id={movie.id} 
          title={movie.title} 
          metascore={movie.metascore} 
          movie={movie} 
          director={movie.director}
          />
        ))}
      </div>
    );
  }
}

