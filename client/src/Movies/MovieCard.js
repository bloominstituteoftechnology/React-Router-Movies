import React from 'react';
import MovieActors from './MovieActors'
import {Route, Link} from 'react-router-dom';
const MovieCard = props => {
  return(
      <div>
          <Link to={`/movies/${props.movie.id}`} >Actors</Link>
          <Link to={`/movies/${props.movie.id}`}>
            <div className={'movie-card'}>
              <h2>{props.movie.title}</h2>
              <em className={'movie-director'}>Director: {props.movie.director}</em>
              <p>metascore: {props.movie.metascore}</p>
              <Route
                path={'movie/:id/actors'}
                render={props => <MovieActors {...props} actors={props.movie.stars}/>}
               />
              <div onClick={props.addToSavedList}className="save-button">Save</div>
            </div>
          </Link>
      </div>
      );
};

export default MovieCard;
