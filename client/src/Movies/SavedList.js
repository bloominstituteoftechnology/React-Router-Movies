import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SavedList.css";

// export default class SavedList extends Component {
const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          activeStyle={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold"
          }}
          to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <div className="saved-list-buttonrow">
        <Link to="/" className="home-button">
          Home
        </Link>
        <button className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default SavedList;
