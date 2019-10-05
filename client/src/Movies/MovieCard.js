
import Movie from "./Movie";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import React, { useState, useEffect } from 'react';

function MovieCard  (props) {
  console.log(props);
  const { title, director, metascore, stars, id } = props.movie;
  return(
    
      <div className="movie-card">
        <Link to={`/movies/${id}`}> <h2>{title}</h2>  </Link>
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
        <button className="save-button">Save</button>
      </div>
  );
}

export default MovieCard;

// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <Link to={`/movies/${movie.id}`}> <h2>{title}</h2> </Link>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>        
//       ))}
//     </div>
//   );
// }

// const { title, director, metascore, stars } = movie;
// return (
//   <div className="save-wrapper">
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//     <div className="save-button">Save</div>
//   </div>
// );
