import React from 'react';
import { Link } from 'react-router-dom'


export default function MovieCard (props) {

  const { title, director, metascore, id } = props.movie; 


  return (

    <Link to={`/movies/${props.movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

        {/* stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        )) */}
        
        <div className="save-button">Save</div>
      </Link>

  )
}
