import React from 'react';
import { useHistory } from 'react-router-dom'




export default function MovieList(props) {
const {movies} = props

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
 const history = useHistory();
 const moreDetails = () => {
  history.push(`/movies/${props.movie.id}`)
}

  return (
    <div className="movie-card" onClick={moreDetails}>
      <h2>{title}</h2>
     
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
        
      </div>
      <div className="actors">
        Actors:{props.movie.stars}
      </div>
    </div>
  );
}
