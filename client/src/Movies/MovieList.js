import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = props => {
  const {movieData} = props;
  return (
    <div className="movie-list">
      {movieData.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link className="myLinkStyles" to={`/movies/${movie.id}`}>
    <div className="save-wrapper">
      {/* Stretch Below */}
      <MovieCard cardTitle={title} cardDir={director} cardMeta={metascore} cardStars={stars} />
    </div>
    </Link>
  );
}

export default MovieList;