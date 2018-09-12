import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = props => {
  return (
<Link to={`/movies/{props.movie.id}`}/>)
};

export default MovieCard;
