import React from 'react';

import {Link} from 'react-router-dom';

const MovieCard = props => {
  return <Link to='/movie/:id'>{props.movie}</Link>
};

export default MovieCard;
