import React from 'react';
import { useHistory } from "react-router-dom";

export default function MovieCard (props) {
  const { data } = props
  const { title, director, metascore, id } = data.movie;

  const history = useHistory();

  const routeToMovieCard = () => {
    history.push(`/movies/${id}`)
  }


  return (
    <div onClick={routeToMovieCard} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  )
}
