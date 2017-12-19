import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { getMovies } from "../actions";

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log("movies?", this.props.movies);
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, i) => (
            <Movie key={i} index={i} movie={movie} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);
