import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardSubtitle } from "reactstrap"


const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <Card style={{margin: "5%", padding: "3%", backgroundColor: "#edf6f9", boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.50)", border: "solid 1px black"}} key={movie.id}>
      <Link style={{textDecoration: "none"}} to={`/movies/${movie.id}`}>
      <CardTitle style={{fontSize: "1.7rem", color: "#e63946", textShadow: "1px 1px 3px #9a8c98", fontWeight: "bold", fontFamily: "'Krona One', sans-serif" }}>{title}</CardTitle>
      <CardSubtitle style={{color: "#293241", marginBottom: "1%"}}>
        Director: <em>{director}</em>
      </CardSubtitle>
      <CardSubtitle style={{color: "#293241"}}>
        Metascore: <strong>{metascore}</strong>
      </CardSubtitle>
      </Link>
    </Card>
  );
}

export default MovieList;
