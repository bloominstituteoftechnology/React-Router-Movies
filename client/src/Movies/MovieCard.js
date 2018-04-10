import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"; 


export default class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieCard: []
    };
  };

  componentDidMount() {
    console.log('hello');
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movieCard: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return(
      <div className="movie-list">
        {this.state.movieCard.map(movie => (
          <Link to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    )
  }
}

function MovieDetails({movie}) {
  const { title, director, metascore, stars } = movie;
return (
      <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
  )
}