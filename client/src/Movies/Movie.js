import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    let id = this.props.match.params.id;
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
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    const movie = this.state.movie; 
      if (!movie) {
        return <div>Loading movie information...</div>;
    }

    return (
      <MovieCard
        key = {movie.id}
        movie = {movie}
        title = {movie.title}
        director = {movie.director}
        metascore = {movie.metascore}
        stars = {movie.stars} 
      />    
    );
  }
}
