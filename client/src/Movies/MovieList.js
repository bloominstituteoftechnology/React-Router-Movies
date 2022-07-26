import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div> 
  );
}

function MovieDetails(props) {
  const {title, director, metascore, stars, id} = props.movie


  return (
    <Link className='card' to={`/movies/${id}`}>
    <MovieCard title={title} director={director} metascore={metascore}/>
    </Link>
  );
}
