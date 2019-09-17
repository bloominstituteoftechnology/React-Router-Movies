import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Added 

import { Link } from "react-router-dom";

// import { BrowserRouter as Links } from "react-router-dom";

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

// This below goes to different movies but no ID numbers

// Works and returns http://localhost:3000/movie-list/0
  // <Link to={`/movie-list/${movie.id}`}>

// Works and returns http://localhost:3000/movies0
// <Link to={`movies${movie.id}`}>

//Returns http://localhost:3000/movies/0 FAILED TO COMPILE
//<Link to={`/movies/${movie.id}`}>


        <MovieDetails key={movie.id} movie={movie} />


      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (

   
  <Link to={`/movies/${movie.id}`} >
<div className="movie-card">
    <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
</div>
  </Link>
    
  );
}

export default MovieList;
