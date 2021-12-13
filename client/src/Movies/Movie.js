import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  // Pull movie id from url
  const { movieId } = useParams();

  useEffect(() => {
    // Fetch the movie object using the movie id in the url
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`)
      .then(response => {
        // Set the currently selected movie to the one in the url
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  // Check if the movie state is set or not
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    // Return the movie's details
    <div className="save-wrapper">
      <MovieCard movie={movie} actors='true' />
    </div>
  );
}
