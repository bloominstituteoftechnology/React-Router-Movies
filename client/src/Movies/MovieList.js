import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';


export default function MovieList({movieList}) {
  // console.log("props passed to movieList: ",{movieList}) // it works, array of movie objects

  // We'll grab the current URL using the hook
  const { url } = useRouteMatch();
  console.log("url from MovieList: ", url);

  return (
    <div className="movie-list">
      {movieList && movieList.map(movie => {
      console.log("Movie: ", movie);
        //  return <MovieDetails key={movie.id} movie={movie} />
          return <MovieCard key={movie.id} movieDetails={movie}/>
      })}
    </div>
  );
    }
// COMBINED IN MOVIECARD: 
// function MovieDetails(props) {
//   const {movie} = props;
//   const { title, director, metascore } = props.movie;
  
//   const history = useHistory();
 

//   return (
//     <div  onClick={(evt) => history.push(`/movies/${movie.id}`)} to={'/movies/:movie.id'} className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
