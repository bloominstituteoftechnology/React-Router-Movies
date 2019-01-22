import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
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

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{this.state.movie.title}</h2>
          <div className="movie-director">
            Director: <em>{this.state.movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{this.state.movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {this.state.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
      </div>
    );
  }
}
export default Movie