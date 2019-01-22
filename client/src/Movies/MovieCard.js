import React from 'react';
import SavedList from "./SavedList";

const MovieCard = props => {

  let movie;
  let id;
 // console.log(props);
  if(props.match && props.match.param.id){
    id= props.match.id;
  }else {
    id=props.id;
  }
  movie=SavedList.find(movie => {
     $`{movie.id}`
     === (id)
  })

  return movie ===undefined? <div><h1>Error ,movie can't be found</h1></div>:
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <p> className="movie-director">
          Director: <em>{movie.director}</em>
        </p>
        <p> className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </p>
        <h3>{movie.Actors}</h3>
      </div>
};
export default MovieCard;