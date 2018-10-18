import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from './MovieList';


// const MovieCard = props => {

class MovieCard extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        movies: []
      }
    }

    componentDidMount() {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          this.setState(() => ({ movies: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    render(){
      return (
        <div className="movie-card">
        <h2>{props.title}</h2>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      )

    }
};


export default MovieCard;
