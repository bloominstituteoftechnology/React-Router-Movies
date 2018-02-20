import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies } from "../actions";
import { NavLink } from "react-router-dom";

class Movies extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <div className="movies">
        <h2>We Have All The Movies You Like</h2>
        <NavLink className="link" to="/">Back</NavLink>
        <NavLink className="link" to="/new-movie">Add New Movie</NavLink>
        <h3>Please Find the movie You Like Below</h3>
        {this.props.movies.map((movie, i) => {
          return (
            <div key={i}>
              <NavLink className="link" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getAllMovies })(Movies);
