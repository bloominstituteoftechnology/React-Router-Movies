import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  // console.log(props.set)
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} set={props.set}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // const { title, director, metascore, stars, id} = movie;

  return ( 

    <div className="movie-card">
        <Link to={`/movies/${props.movie.id}`} onClick={() => {props.set(props.movie.id)}}>
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
        </Link>  
    </div>

  );
}

export default MovieList;
