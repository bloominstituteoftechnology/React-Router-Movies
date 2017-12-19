import React from "react";

const Movies = ({ movie, index }) => {
  return (
    <li>
      <p>{`ID ${index + 1}`}</p>
      <p>{`Title: ${movie.title}`}</p>
      <p>{`Director: ${movie.director}`}</p>
      <p>{`Metascore: ${movie.metascore}`}</p>
      <p>{`Stars: ${movie.stars}`}</p>
    </li>
  );
};

export default Movies;
