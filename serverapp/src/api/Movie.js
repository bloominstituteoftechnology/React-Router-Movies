import { movies } from '../actions';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ params: { movieId } }) => {
    const movie = movies.find(
      movie => movie.id === parseInt(movieId, 10)
    );
  
    return (
      <div>
        <div className="movie-title">
          <h2>{movie.name}</h2>
          <hr />
        </div>
  