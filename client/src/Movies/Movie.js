import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
 console.log('Movie', props, props.match.params.id);

// function must be outside of the useEffect scope so it can be called back in the [] at the end.
 const id = props.match.params.id;
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  // !true === false, !false === true, !null === undefined === !false === true

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
    return (
      <MovieCard movie={movie} addToSavedList={props.addToSavedList} />
    );
}

export default Movie;

// OR   <MovieCard movie={movie} {...props} />