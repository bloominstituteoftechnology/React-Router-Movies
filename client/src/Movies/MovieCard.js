import React from 'react';

const MovieCard = props => {
  return <h4>{props.match.params.id}</h4> 
};

export default MovieCard;
