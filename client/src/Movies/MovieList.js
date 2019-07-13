import React, { Component } from 'react';
import axios from 'axios';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    console.log(props, "from constructor");
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
          <MovieDetails key={movie.id} movie={movie} props={this.props} />
        ))}
      </div>
    );
  }
}

function routeToMovies(props,movie){
  props.history.push(`/movies/${movie.id}`)

}

function MovieDetails({ movie, props }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card" onClick={() => routeToMovies(props,movie)}>
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
  );
}
