import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"

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
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { movie } = this.state;
    console.log(this.state.movie,"props")
    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
        <div className="save-button" onClick={ () => console.log("clicked")}>Save</div>
      </div>
    );
  }
}


// const { title, director, metascore, stars } = this.state.movie;

{/* <div className="movie-card">
<h2>{title}</h2>
<div className="movie-director">
  Director: <em>{director}</em>
</div>
<div className="movie-metascore">
  Metascore: <strong>{metascore}</strong>
</div>
<h3>Actors</h3>

{stars.map(star => (
  <div key={star} className="movie-star">
    {star}
  </div>
))}
</div> */}