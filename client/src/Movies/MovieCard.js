import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = props => {
  
  return (
    <div className="save-wrapper">
         <div className="movie-card">
        <h2>{props.islist ? <Link to={`/movies/${props.id}`} key={props.id}>{props.title}</Link> : props.title }
          {/* <Link to={`/movies/${props.id}`} key={props.id}>{props.title}</Link> */}
          </h2>
           <div className="movie-director">
             Director: <em>{props.director}</em>
           </div>
           <div className="movie-metascore">
             Metascore: <strong>{props.metascore}</strong>
           </div>
           <h3>Actors</h3>

          {props.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      </div>
  );
  
  
};

export default MovieCard;