import React from 'react';
import {Link } from 'react-router-dom';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  let movie_id = `/movies/${id}`;
  return(
    <div className="movie-card">
      <Link to = {movie_id} > {title}</Link>
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
      {props.saveMovie ? <div onClick={props.saveMovie} className="save-button">Save</div> : null}
    </div>
  )
};

export default MovieCard;
