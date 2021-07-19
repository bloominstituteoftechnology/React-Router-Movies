
import React from 'react';
import { Link } from 'react-router-dom';

//MovieList function props as parameter
export default function MovieList(props) 
{
  //Return function
  return (
    <div className="movie-list">
      {props.movies.map(movie => (        
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

//MovieDetails function takes props parameter
function MovieDetails(props) 
{

  const { title, director, metascore, id } = props.movie;

  //Return function
  return (
    // Place title from the data in the h2
    <Link to = {`movies/${id}`}>
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
    </Link>
  );
}
