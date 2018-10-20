import React from "react";
import { NavLink } from "react-router-dom";

const SavedItem = (props) => {
    return (
        <NavLink to={`/movies/${props.movie.id}`}>{props.movie.title}</NavLink>
    )
}

export default SavedItem;