import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.movieId;
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
  
  componentWillReceiveProps(newProps){
    console.log('New props = ', newProps.match.params, ' this . ', this.props.match.params)
    if(this.props.match.params.movieId !== newProps.match.params.movieId){
      this.fetchMovie(newProps.match.params.movieId);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {

    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie}/>
        <div onClick={this.saveMovie} className="save-button">Save</div>
      </div>
    );
  }
}
