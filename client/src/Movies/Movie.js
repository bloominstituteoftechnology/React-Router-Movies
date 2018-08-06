import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    console.log("Movie", props);
    this.state = {
      movie: null,
      url: props.match
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    console.log("URL", this.state.url.params.id);
    const id = this.state.url.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    return <MovieCard movie={this.state.movie} onClick={this.addToSavedList} />;
  }
}
