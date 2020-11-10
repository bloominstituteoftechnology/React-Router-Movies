import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../Movies/MovieCard';

export default function MovieList(props) {
  return (
    <div className='movie-list'>
      {/* {console.log(props)} */}
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  // console.log('props', props);

  return (
    <Link className='link' to={`movies/${id}`}>
      <MovieCard movie={props.movie} />
    </Link>
  );
}
