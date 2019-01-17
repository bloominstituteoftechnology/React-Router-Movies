import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  let button;
  if (props.hide) {
    button = <button style={{display: 'none'}} onClick={props.saveMovie}> Add Movie </button>
    } else {
    button = <button className="save-button" onClick={props.saveMovie}> Add Movie </button>
    }

  return (
      <div className="movie-card">
        <Link style={{color: '#000' }} to={`/movies/${props.movie.id}`} key={props.movie.id}>{props.movie.title}</Link>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

          {props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
          {button}
      </div>
)}

export default MovieCard;
