import React from 'react';
import { Link } from "react-router-dom";

//moved lines from movie.js to here DRY (apparently this is a stretch goal)
function Button(props) {
  if (typeof(props.save) === "function"){
    return <div className="save-button" onClick={() => props.save(props)}>Save</div>
  }
  return <div></div>;
}
const MovieCard = props => {
  const { title, director, metascore, stars } = props;
  return (
    <div className="save-wrapper">
        <div className="movie-card">
          <Link to={`/movies/${props.id}`}>{title}</Link>
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
        <Button save={props.save}/>
      </div>
  );
};

export default MovieCard;
