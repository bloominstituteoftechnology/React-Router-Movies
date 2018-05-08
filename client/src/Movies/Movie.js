import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
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
   if(this.props.match.params.id !== newProps.match.params.id){
     this.fetchMovie(newProps.match.params.id);
   }
 }
  addToSavedList = (movie) => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({
      savedList
    });
  }

 saveMovie = () => {
   const addToSavedList = this.props.addToSavedList;
   addToSavedList(this.state.movie.title);
 }

  handleSaveClick = () => {
    this.saveMovie();
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const movie = this.state.movie;
    return (
      <div className="save-wrapper">
      <MovieCard {...movie}/>
        <div className="save-button" onClick={event => this.handleSaveClick(event)}>Save</div>
      </div>
    );
  }
}
