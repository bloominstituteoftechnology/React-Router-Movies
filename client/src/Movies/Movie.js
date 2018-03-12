import React from 'react';
import axios from 'axios';
import './Movie.css'; 

import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const { match: { params } } = this.props;
   

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

    const { title, director, metascore, stars} = this.state.movie;
    return (
      <div className='movie-box'>
      <div className={`movie-card movie-${this.props.match.params.id}`} id={this.props.id}>
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



        <Link to='/'>
          <h4>Go Back</h4>
          </Link> 
      </div>
      <div className={`movie-${this.props.match.params.id} movie-img`}>
          {/* <img className={`movie-${this.props.match.params.id}`} src='https://lunkiandsika.files.wordpress.com/2011/11/the-godfather-alternative-poster-1972-01.png' /> */}
        </div>

      </div>
    );
  }
}
