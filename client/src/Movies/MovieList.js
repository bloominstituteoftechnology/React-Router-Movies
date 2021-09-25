import React from 'react';
<<<<<<< HEAD
import { Link, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

export default function MovieList(props) {
  console.log('MovieList.js ln:8 props', props);
=======
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'



export default function MovieList(props) {
>>>>>>> f432b5f74740ff0ada66833114c5193ff929dab2
 
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} to={`/Movies/MovieList/${movie.id}`}> 
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
<<<<<<< HEAD
=======
       
        
>>>>>>> f432b5f74740ff0ada66833114c5193ff929dab2
      ))}
    </div>
  );
}
// const history = useHistory();
// const showMovie = () => {
//   // history.push(`/movies/${id}`)

// };


function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card" >
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
