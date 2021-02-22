import React from 'react';
import { useHistory} from 'react-router-dom'


export default function MovieList(props) {
  const { movieList } = props
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  let history = useHistory()

  return (
    <div className="movie-card"  onClick={() => history.push(`/movies/${id}`)}>
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
