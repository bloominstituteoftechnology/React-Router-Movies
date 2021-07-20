/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.3.1 React Router Project MovieList.js
 * 7/19/2021
 **/

//Import statements
import React from 'react';
import { Link } from 'react-router-dom';

//MovieList function props as parameter
export default function MovieList(props) 
{
  //Return function
  return (
    <div className="movie-list">
      {props.movies.map(movie => (       
        // Link "key" "to" the path
        <Link key={movie.id} to={`/Movies/MovieList/${movie.id}`}> 
          <MovieDetails key={movie.id} movie={movie} />  
        </Link>
      ))}
    </div>
  );
}

//MovieDetails function takes props parameter
function MovieDetails(props) 
{

  const { title, director, metascore } = props.movie;

  //Return function
  return (
    // Place title from the data in the h2
    <div className="movie-card">
      <h2>{title}</h2>

      {/* director info in this div */}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>

      {/* metascore in this div */}
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}