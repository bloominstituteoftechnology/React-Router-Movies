import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

export default function MovieCard ({details}) {
  const {history} = useHistory();

  const goToMovieCard = () =>{
    history.push(`/movies/${details.id}`);
  }

  return(
    <div>
      <div className="movie-card" onClick={goToMovieCard} >
          <h2>{details.title}</h2>
          <div className="movie-director">
            Director: <em>{details.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{details.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {details.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
    </div>
  )
}
