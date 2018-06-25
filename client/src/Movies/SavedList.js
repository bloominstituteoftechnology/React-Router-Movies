import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
         <Link to={`/movies/${movie.id}`}> <span key={`save-${Math.random()}`} className="saved-movie">{movie.title}</span> </Link>
        ))}
       
          <Link  className="home-button" to="/"> Home </Link>

      </div>
    );
  }
}
