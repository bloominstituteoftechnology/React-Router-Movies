import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'
import SavedList from './SavedList'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    console.log("movies.s",this.props)
    let id2 = this.props.match.params.id;
    const id = 1;
    if(id2 === undefined){
      this.fetchMovie(id);
    }
    else{
      this.fetchMovie(id2);
    }
    
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
    console.log("new props",this.props)
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    console.log("save movie",this.props)
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper movie-card">
        <MovieCard movie = {this.state.movie} />
        <div className="save-button" onClick = {this.saveMovie}>Save</div>
      </div>
    );
  }
}
