import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom'



export default function MovieCard (props) {
  return (
    // <Link to={`/movies/${MovieList.id}`}>
      <div>
        <Movie />  
      </div>
    // </Link>
  );
}
