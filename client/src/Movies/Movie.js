import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        director: "",
        metascore: "",
        stars: []
      },
      savedList: []
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const { match } = this.props
    const id = match.params.id;
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
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }
  addToSavedList = (movie) => {
    var newSavedList = this.state.savedList;
    newSavedList.push(movie);
    console.log(newSavedList);
    console.log(this.state.savedList)
  }

  saveMovie = () => {
    console.log("Hk")
    const addToSavedList = this.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    return (
        <MovieCard movie={this.state.movie} clickFunction={this.saveMovie()} />
    );
  }
}
