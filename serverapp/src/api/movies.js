import React, {Component } from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';


const Movies = () => (
    <div>
      <h2 className="movies-header">
        Movies
      </h2>
      <div className="movie-listings">
        {movies.map((movie, i) => (
          <div key={i}>
              <Link to={`/movies/${movie.id}`}>
              </Link>
          </div>
        ))}
       </div>
    </div>
  );
  
  export default Movies;