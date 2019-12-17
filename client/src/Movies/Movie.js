import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SavedList from "./SavedList";

import MovieCard from "./MovieCard";

const Movie = ({ setSavedMovie, addToSavedList }) => {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    // const addToSavedList = addToSavedList;
    addToSavedList(movie);
  };

  const clickHandler = () => {
    setSavedMovie(true);
    saveMovie(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
      />
      <div className="save-button">
        <button onClick={clickHandler}>Save Your Favorite Movies</button>
      </div>
    </div>
  );
};

export default Movie;
