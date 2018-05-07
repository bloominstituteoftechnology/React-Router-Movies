import React from 'react';

<<<<<<< HEAD
const MovieCard = props => {
  return
  
  <div>
    return (
=======
const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars, id } = movie;
  return (
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
    <div className="movie-card">
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
  );
<<<<<<< HEAD
}

  </div>;
=======
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
};

export default MovieCard;
