import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import  styled from 'styled-components';

const Link = styled.
const MovieCard = props => {
  console.log(props);
  let {id, title, director, metascore, stars }= props.movie;
  return (
    <Link to={`/movies/${id}`} className="movie-card">
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
    </Link>
  )
};

export default MovieCard;
