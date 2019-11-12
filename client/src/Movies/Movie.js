import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const movie = props.movies.find(
    findMovie => findMovie.id === Number(props.match.params.id)
  )

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }
 

        return(
          <div> <MovieCard saveMovie={saveMovie} title = {movie.title} director= {movie.director} metascore = {movie.metascore} stars= {movie.stars} /> </div>
        )
  // Uncomment this only when you have moved on to the stretch goals
  
}

export default Movie;
