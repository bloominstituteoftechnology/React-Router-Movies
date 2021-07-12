import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MovieCard (props) {
  const { movies } = props
  const { pathname } = useLocation()
  

  return (
    <div className='movie-card-wrapper'>
      {movies.map(movie => (
        <div 
          className='movie-card'
          key={movie.id}
        >
        <Link to={`${pathname}/${movies.id}`}/>
        </div>
      ))}
    </div>
  )
}
