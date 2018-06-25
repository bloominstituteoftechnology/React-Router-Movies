import React, { Component } from 'react';
import axios from 'axios';
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
        {this.state.movies.map(movie => (<MovieLink key={movie.id} movie={movie} />))}
      </div>
    );
  }
}

function MovieLink({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
            <div className="movie-card">
          <h2><Link to={`/${movie.id}`} key={movie.id}>{movie.title}</Link></h2>
        </div>
   );
}