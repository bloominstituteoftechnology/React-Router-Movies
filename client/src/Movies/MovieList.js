import React from 'react';
import {Link, useRouteMatch, useParams, useHistory} from 'react-router-dom'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // const { url } = useRouteMatch()
  const { id } = useParams()
  const { url } = useRouteMatch()
  
  const history = useHistory()
  const routeToMovie = () => {

    history.push(`${url}/api/movies/${id}`)
  }
  console.log(history)
  return (
   
    // <div onClick={routeToMovie}>
      <div className="movie-card">
        {/* <Link to = {`${url}/api/movies/${id}`}>Movies</Link> */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    // </div>
    

  );
}