import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from "./Movies";
import { getMovies } from "../actions";

class Home extends Component {
  componentDidMount() {
    console.log("getmovies", getMovies);
    this.props.getMovies();
  }

  render() {
    console.log("render called?", this.props);
    return (
      <div>
        <div>hi</div>
        <ul>
          {this.props.movies.map((movie, i) => (
            <Movies key={i} index={i} movie={movie} />
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

export default connect(mapStateToProps, { getMovies })(Home);
