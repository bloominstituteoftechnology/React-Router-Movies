import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


export default function MovieList({movieList}) {
  console.log("props passed to movieList: ",{movieList})

  // We'll grab the current URL using the hook
  const { url } = useRouteMatch();
  console.log("url: ", url);

  return (
    <div className="movie-list">
      {movieList && movieList.map(movie => {
      // console.log("Movie: ", movie);
        // <Link to={`${url}/movies/${movie.id}`}>
         return <MovieDetails key={movie.id} movie={movie} />
        // </Link>
      })}
    </div>
  );
    }

function MovieDetails(props) {
  const {movie} = props;
  const { title, director, metascore } = props.movie;
  // console.log("Title: ", title); 
  const history = useHistory();

 

  return (
    <div  onClick={(evt) => history.push(`/movies/${movie.id}`)} to={'/movies/:movie.id'}className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
