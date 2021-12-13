import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  console.log(movie);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  // Check if the movie state is set or not
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // Destructure the movie object
  const { title, director, metascore, stars } = movie;

  return (
    // Return the movie's details
    <div className="save-wrapper">
      <div className="movie-card">
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
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
