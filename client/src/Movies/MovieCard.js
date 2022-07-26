import React from 'react';
import Movie from './Movie'
function MovieCard (props) {
  const { title, director, metascore, stars, id} = props
  return(
    <div className="save-wrapper">
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div> {stars &&
      <h3>Actors</h3>
        }
      {
       stars &&
        stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
        </div> 
  )}
        
  

export default MovieCard