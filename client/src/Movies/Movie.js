import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  
  state = {
    movie: null //this.props.movie,
    // id: this.state.movie.pathname.slice('/')[1]
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const { match: { params }} = this.props;
    //const id = this.props.match.params; //this.state.movie.pathname.slice('/')[1] //"/movies/0" //this.state.movie;
    axios
      .get(`http://localhost:5000/api/movies/${params.id}`)
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
        <Link to='/'>Go Home!</Link>
      </div>
    );
  }
}
