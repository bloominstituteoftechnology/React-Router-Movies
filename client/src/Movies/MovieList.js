import React, { Component } from 'react';
// import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import movies from '../movie_data'
import MovieCard from './MovieCard'
import Movie from './Movie'
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

  render(props) { 
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <div>
          <MovieCard key={movie.id}
          movies={this.state.movies}
          id={movie.id} 
          {...props}
          title={movie.title} 
          metascore={movie.metascore} 
          movie={movie} 
          director={movie.director}
          />
          </div>
        ))}
        {this.state.movies.map(movie => (
          <div>
          <Movie key={movie.id}
          id={movie.id} 
          {...props}
          title={movie.title} 
          metascore={movie.metascore} 
          movie={movie} 
          director={movie.director}
          />
          </div>
        ))}
      </div>
    );
  }
}

