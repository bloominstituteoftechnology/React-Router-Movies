import React from 'react';

const MovieCard = props => {
  console.log(props.title)
  return <h3>{props.title}</h3>;

};

export default MovieCard;
