import React from "react";

const MovieCard = props => {
  const { title, director, metascore, stars } = props;
  return (
    <div className="movie">
      <h2>{title}</h2>
      <div className="director">
        Director: <em>{director}</em>
      </div>
      <div className="metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="star">
          {star}
        </div>
      ))}
      <div className="save-button" onClick={props.saveMovie}>Save</div>
    </div>
  );
};

export default MovieCard;