import React from 'react';
import { useHistory } from 'react-router-dom'

const MovieCard = props => {

  const { movie } = props;
  const { title, director, metascore, stars, id } = movie;
  
  const history = useHistory();
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
}

  return(

<div className="save-wrapper">
      <div onClick={() => history.push(`/movies/${id}`)} className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>


  )
};

export default MovieCard;
