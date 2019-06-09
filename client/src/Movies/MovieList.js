import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    await axios.get('http://localhost:5000/api/movies').then(res => {
      setMovies(res.data);
    });
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
