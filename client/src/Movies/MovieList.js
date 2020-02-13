import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  // console.log('Movie List', props);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log('Get Movie API', response);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} {...props} />
      ))}
    </div>
  );
};

export default MovieList;
