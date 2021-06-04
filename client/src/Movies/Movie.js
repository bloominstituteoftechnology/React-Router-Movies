import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Movie(props) {
  const [movie, setMovie] = useState();  

  console.log(movie)
   let { id } = useParams() 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) 
      .then(res => {
        // console.log(res.data)  
        setMovie(res.data)        
      }) 
      .catch(error => {
        console.error(error);
      });
  }, [id]); // Makes it run only when id is ran. 



  // if (!movie) {
  //   return <div>Loading movie information...</div>;  // THIS IS ALL THAT SHOWS UP...
  // }

  const { title, director, metascore, stars } = props.movie;

console.log(props.movie)

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
      <div className="save-button">Save</div>
    </div>

  );
}
