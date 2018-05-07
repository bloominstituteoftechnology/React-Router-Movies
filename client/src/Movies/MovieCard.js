import React from 'react';

const MovieCard = () => {
  <div>
    {MovieList.state.movies.map(movie => {
      return (
        <Link to={`/movies/${movie.toLowerCase()}`} key={movie}>{movie}</Link>
      );
    })}
  </div>
};

export default MovieCard;
