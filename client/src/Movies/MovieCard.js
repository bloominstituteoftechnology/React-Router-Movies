import React from 'react';

export default function MovieCard ({details}) {
  return(
    <div>
      <div className="movie-card">
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
