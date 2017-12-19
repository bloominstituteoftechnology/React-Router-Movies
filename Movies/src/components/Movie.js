import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, index }) => {
  console.log("movie is?", movie);
  return (
    <li>
      <p>{`ID ${index + 1}`}</p>
      <p>
        <Link to={"movies/" + movie.id}>{`Title ${movie.title}`} </Link>
      </p>
      <p>{`Director: ${movie.director}`}</p>
      <p>{`Metascore: ${movie.metascore}`}</p>
      <p>{`Stars: ${movie.stars}`}</p>
    </li>
  );
};

export default Movie;
