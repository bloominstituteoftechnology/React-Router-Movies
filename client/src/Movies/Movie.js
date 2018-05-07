import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    // const id = 1;
    console.log("Movie.js Props", this.props);
    this.fetchMovie(this.props.routeProp.match.params.id);
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
    console.log(newProps);
    if(this.props.routeProp.match.params.id !== newProps.routeProp.match.params.id){
      this.fetchMovie(newProps.routeProp.match.params.id);
    }
  }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    console.log("Movies.js Props", this.props);

    // const onClickCb = () => {
    //   console.log()
    // }
    return (
      <div className="save-wrapper">
        <div className="movie-card">
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
        </div>
        <div onClick={() => this.props.save(this.state.movie)} className="save-button">Save</div>
      </div>
    );
  }
}
