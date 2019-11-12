import React, { useState, useEffect } from 'react';

import {Link} from "react-router-dom";
import MovieCard from './MovieCard';
const MovieList = props => {
  
  
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
     <Link to ={`/Movies/${movie.id}`}>
    <div> 
        <MovieCard title = {movie.title} director= {movie.director} metascore = {movie.metascore} stars= {movie.stars} /> 
      </div>
     </Link> 
  );
}

export default MovieList;
