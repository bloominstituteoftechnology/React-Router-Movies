import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom'

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
        <ul>
        {this.state.movies.map(movie => (
          <div key={movie.id}  movie={movie}>
            <Link to={`/movies/${movie.id}`} ><MovieTitle movie={movie} /></Link>
          </div>
        ))}
        </ul>
      </div>
    );
  }
}

const MovieTitle = props => {
  return  (
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
    </div>)
    ;
  };
