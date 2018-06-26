import React from 'react';
import {Link} from 'react-router-dom';



const MovieCard = props => {

  return (
    <div className="movie-card"><Link to={`/movies/${props.id}`} className="movie-card">
      <h2>{props.title}</h2>
      {console.log(props.title)}
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>
{console.log(props.stars)}
      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </Link>
    </div>

  );
}

export default MovieCard;
