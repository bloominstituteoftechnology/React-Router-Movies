import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import { BrowserRouter, Route, Router, Switch, Link, useParams, useLocation } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'


export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
