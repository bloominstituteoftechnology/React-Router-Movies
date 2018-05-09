{/* I'm pretty sure I basically copied and pasted this from MovieList.js */}
{/* I didn't understand why it was in there when this is everything you want on your movie card, not the list, which you get from somewhere else anyway */}

import React from 'react';

const MovieCard = ({movie}) => {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">Director:<em>{director}</em></div>
      <div className="movie-metascore">
	Metascore: <strong>{metascore}</strong></div>
      <div>
        <h3>Actors</h3>
          {stars.map(star => (
  	    <div key={star} className="movie-star">{star}
	    </div>
	  ))}
      </div>
    </div>
  );
};
      

export default MovieCard;
