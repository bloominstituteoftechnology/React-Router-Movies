import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';
export default function Movie(props) {
  const [movie, setMovie] = useState();

  let {itemID} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${itemID}`)
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  if (!movie) {
    return <div>Loading Movie Data...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
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
      <div onClick={()=>props.addToSavedList(movie)} className="save-button">Save</div>
    </div>
  );
}
