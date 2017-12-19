import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies } from "../actions";
import { Link, NavLink } from "react-router-dom";

class Movies extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <div>
        <h2>Please Selec the Movie Title</h2>
        <NavLink to="/">Back</NavLink>
        <NavLink to="/new-movie">Add New Movie</NavLink>
        {this.props.movies.map((movie, i) => {
          return (
            <div key={i}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
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
