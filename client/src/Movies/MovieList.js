import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

export default function MovieList(props) {
const history = useHistory();

// const{movieID} = useParams();
// const {id} = props.movie;
  return (
    <div className="movie-list">
      {props.movies.map(movie => (<div onClick={()=>history.push(`/movies/${movie.id}`)}>
        <MovieDetails key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
