import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard"

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard movie={movie} listElement={true}/>
        </Link>
      ))}
    </div>
  );
}