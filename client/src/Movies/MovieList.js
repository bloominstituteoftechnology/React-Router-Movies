import React from 'react';
import { Link, useRouteMatch, useHistory} from 'react-router-dom';
//import MovieCard from './MovieCard';


export default function MovieList({movieList}) {
  const { url } = useRouteMatch(); //Matching the url for the individual movie pages?
  console.log("url: ", url); //Here we can see it in the console, but is not showing the url?

  return (
    <div className="movie-list">
      {console.log("movie-list", movieList)}
      { movieList.map(movie => {
        return <MovieDetails key={movie.id} oneMovie={movie} /*url={movie.config.url}*//>
        
      }) }
    </div>
  );
}

function MovieDetails(props) {
  
  const { title, director, metascore } = props.oneMovie; 
  const history = useHistory();
//**string interopolation happens inside backticks not quotations */ //now, below the url is working, so when each card is clicked, it has it's appropriate url
  return (
    // I MADE CHANGES HERE
    // These do the same things:
    // #1 <Link to={`/movies/${props.oneMovie.id}`}></Link>
    // #2 <div onClick={(evt) => history.push(`/movies/${props.oneMovie.id}`)}></div>
    // #3 <a href={`/movies/${props.oneMovie.id}`}></a>
  <Link to={`/movies/${props.oneMovie.id}`} className='movie-card' > 
    <div onClick={(evt) => history.push(`/movies/${props.oneMovie.id}`)} className="movie-card">
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
