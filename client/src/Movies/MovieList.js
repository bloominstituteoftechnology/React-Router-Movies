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
  


  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} addToSavedList={props.addToSavedList} />
      ))}
    </div>
  );
}

function MovieDetails({ movie, addToSavedList }) {
  //const { title, director, metascore, stars, id } = movie;


  return (
    <MovieCard key={movie.id} movie={movie} addToSavedList={addToSavedList}/>
  );
}

export default MovieList;
