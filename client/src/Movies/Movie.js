import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

export default class Movie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movie: null,
    };
  }
  /* You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected. */
  componentDidMount() {
    this.fetchMovie(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = (id) => {
    // change this line to grab the id passed on the URL
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }))
      })
      .catch(error => {
        console.error(error);
      });
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }
  
  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }
    
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>Save</div>
      </div>
    );
  }
}