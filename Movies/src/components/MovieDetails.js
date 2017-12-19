import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieID } from "../actions";

class MovieDetails extends Component {
  componentDidMount() {
    console.log("propsmount", this.props.match.params.id);
    this.props.getMovieID(this.props);
  }

  render() {
    return (
      <li>
        <p>{`ID ${this.props.index + 1}`}</p>
        <p>{`Title ${this.props.title}`}</p>
        <p>{`Director: ${this.props.director}`}</p>
        <p>{`Metascore: ${this.props.metascore}`}</p>
        <p>{`Stars: ${this.props.stars}`}</p>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovieID })(MovieDetails);
