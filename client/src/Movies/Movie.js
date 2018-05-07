import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    let id = this.props.match.params.id;
=======
    // change this line to grab the id passed on the URL
    const { id } = this.props.match.params;
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
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
<<<<<<< HEAD
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
=======
  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
>>>>>>> b9fa767363f5c69fd9db0d1774d6f157e5de66f9
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { movie } = this.state;
    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
        <div className="save-button" onClick={() => this.saveMovie()}>
          Save
        </div>
      </div>
    );
  }
}
