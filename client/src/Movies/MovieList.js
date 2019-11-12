import React, { useState, useEffect } from 'react';

import {NavLink} from "react-router-dom";
import MovieCard from './MovieCard';
const MovieList = props => {
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie)
  }
  
  
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
     <NavLink to ={`/Movies/${movie.id}`}>
    <div> 
        <MovieCard  title = {title} director= {director} metascore = {metascore} stars= {stars} /> 
      </div>
     </NavLink> 
  );
}

export default MovieList;
