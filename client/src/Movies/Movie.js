import React from 'react';
import axios from 'axios';

import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import MovieList from './MovieList';

export default class MovieCard extends React.Component {

  state = {
    movie: null,
  };

  componentDidMount() {
    const { match } = this.props;
    // change this line to grab the id passed on the URL
    const id = match.params.id;
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="movie-card">
        <NavLink to="/" exact>Home</NavLink>
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

        <Route path="/" component={MovieList} exact />
      </div>
    );
  }
}
