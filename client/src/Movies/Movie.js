import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null // pulling in movies from server.js by axios
    };
  }

  componentDidMount() {
    // is called after the render
    // change this line to grab the id passed on the URL
    // change id to be dynamically or delete

    // const id = this.props.match.params.id;
    // const foundMovie = movies.find((movie) => movie.id === Number(id));
    // if (!foundMovie) return;
    // this.setState({ movie: foundMovie});

    const id = this.props.match.params.id; // accessing individual id of each friend
    this.fetchMovie(id);
  }

  // contacting server on local host pulling info from localhost on 5000
  // front end making axios from port 3000 request to port 5000 where the back end is
  // fetch movie making request to movies/id
  fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch((error) => {
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

    const { title, director, metascore, stars } = this.state.movie;
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

          {stars.map((star) => (
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
