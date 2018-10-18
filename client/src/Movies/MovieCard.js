import React from 'react';

import MovieList from './MovieList';
import Movie from './Movie';

export default props => {
  
  const MovieCard = props.movies.filter(item => 
    {return item.id === props.match.params.id;
  });
  return <Movie {...MovieCard} />;
}