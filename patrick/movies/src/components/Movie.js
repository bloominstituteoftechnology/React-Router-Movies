import React from 'react';

import { Link } from 'react-router-dom';

const Movie = ({ movie, i }) => {
  return (

    <li key={ i }>
      <Link to={ `/movies/${movie.id}` }>{ `Title: ${movie.title}` }</Link>
    </li>
    /* <Link key={ i }
          to={ `/${movie.id}` }>{ `Title: ${movie.title}` }
    </Link> */
    /* AAAAAAAAAAARG */
  );
};

export default Movie;
