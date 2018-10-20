import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SavedItem from './SavedItem';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <SavedItem key={movie.id} className="saved-movie" movie={movie} />
        ))}
        <NavLink to='/'>
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
