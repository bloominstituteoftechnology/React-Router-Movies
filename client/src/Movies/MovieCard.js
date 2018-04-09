import React from 'react';
import movie from './Movie'

export const MovieCard = ({ movie }) => {
  console.log(movie);
  if ( movie === undefined) {
    return <div>
      </div>;
  }
  
  const { title, director, metascore, stars } = movie;
  
  return (
    <a href={`/movies/${movie.id}`} >
    <div className="movie-card" >
    
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </a>
    
  );
}
