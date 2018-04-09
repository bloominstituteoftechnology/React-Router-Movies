import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props
    };
  }

  render() {
    const movieRef = this.state.movie.movie;
    return (
      <Link to={`/movies/${movieRef.id}`}>
        <div className="movie-card">
          <h2>{movieRef.title}</h2>
          <div className="movie-director">
            Director: <em>{movieRef.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movieRef.metascore}</strong>
          </div>
          <h3>Actors</h3>
          {movieRef.stars.map((star, index) => (
            <div className="movie-star" key={star + index}>{star}</div>
          ))}
        </div>
      </Link>
    )
  }
}
