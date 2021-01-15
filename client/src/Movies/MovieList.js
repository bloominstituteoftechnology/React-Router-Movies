import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

export default function MovieList({movieList}) {
  const { url } = useRouteMatch(); //Matching the url for the individual movie pages?
  console.log("url: ", url); //Here we can see it in the console

  return (
    <div className="movie-list">
      { movieList.map(eachMovie => {
        return <MovieDetails key={eachMovie.id} movie={eachMovie} />
      }) }
    </div>
  );
}

function MovieDetails(props) {
  const { eachMovie }=props;
  const { title, director, metascore } = props.eachMovie;
  const history = useHistory();

  return (
  <Link to ={"/movies/:eachMovie.id"} className='movie-card'>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  </Link>
  );
}
