import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`
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
  
  const { title, director, metascore,id } = props.movie;

  return (
    <LinkStyle to ={`/movies/${id}`}>
    
    <MovieCard title ={title} director = {director} metascore={metascore}/>
    </LinkStyle>
  );
}
