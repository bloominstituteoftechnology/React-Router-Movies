import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  const addToSavedList = () => {
    props.addToSavedList(props.movie);
  };

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <div>
          <NavLink to={`/movies/${props.movie.id}`}>
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
          </NavLink>
        </div>
      </div>
      <div className="save-button" onClick={addToSavedList}>
        Save
      </div>
    </div>
  );
};
// function toggle_visibility(id)
// {
//   var e = document.getElementById(id);
//   if (e.style.display == 'block' || e.style.display=='')
//   {
//       e.style.display = 'none';
//   }
//   else
//   {
//       e.style.display = 'block';
//   }
// }
export default MovieCard;
