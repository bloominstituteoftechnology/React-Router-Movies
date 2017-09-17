import React from 'react'
import {Link} from 'react-router-dom'

const Movie = ({movie}) => (
  <div>
    <Link to={`/${movie.id}`}>Title: {movie.title}</Link>
  </div>
)

export default Movie
