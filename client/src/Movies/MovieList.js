import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        {/* When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie. */}
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
   /*  Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie. */
    <Link to={`/movies/${movie.id}`} style={{paddingLeft: 13, textDecoration: 'none'}}>
      <MovieCard movie={movie} style={{paddingLeft: 13, textDecoration: 'none'}}/>
    </Link>
  );
}