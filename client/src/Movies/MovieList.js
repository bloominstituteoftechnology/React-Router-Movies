import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  const pathToCard = id => {
    props.history.push(`/movies/${id}`);
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div onClick={()=>{pathToCard(movie.id)}}>
          <MovieCard key={movie.id} id={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
