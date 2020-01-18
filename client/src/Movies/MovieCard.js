import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return(
    <Link to ={`/movies/${movie.id}`}>
    <div className='movie-card'>

    </div>
    </Link>
  );
};

export default MovieCard;
