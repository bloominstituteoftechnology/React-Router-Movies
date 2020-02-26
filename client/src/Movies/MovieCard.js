import React from 'react';
import {Route, Link} from 'react-router-dom';

const MovieCard = props => {
  console.log(props)
  return <Link to='/movies/{movieID}'/>;
  
};

export default MovieCard;
