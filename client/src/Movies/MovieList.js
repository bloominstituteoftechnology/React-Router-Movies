import React from 'react';
import { Link, useRouteMatch,  } from 'react-router-dom';
import Movie from './Movie'

export default function MovieList(props) {
  // const { url } = useRouteMatch()


  return (
    <div className="movie-list">
      {props.movies.map(movie => (
    
        <MovieDetails key={movie.id} movie={movie} />
      
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  // const { url } = useRouteMatch();
  // const history = useHistory()


  // const routeDetails = () => {
  //   history.push(`/movies/${id}`)
  // }
 
  return (

      <Link to={`/movies/${movie.id}`}>
      <div ClassName="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </div>
 
{/* /* 
      <button onClick = { routeDetails}>details</button> */}
      </Link> 

   
  );
}
