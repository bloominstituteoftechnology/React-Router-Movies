import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
    {props.movies}
    </div>
  );
};

export default MovieCard;
