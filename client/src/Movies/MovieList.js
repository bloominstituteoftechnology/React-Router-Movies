import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default function MovieList(props){

  return (

    <div className="movie-list">

      {props.movies.map(movie => (
        <Link to ={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>

      ))}

    </div>

  );
}

