import React from 'react';
import { Link } from 'react-router-dom'
import Movie from './Movie'
import axios from 'axios'

class MovieCard extends React.Component{
  constructor(){
    super()
    this.state = {
      movie: null
    }
  }

  componentDidMount(){
    this.setState({
      movies: this.props.movies

    })
  }


  fetchMovie = id => {
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(response => {
      this.setState({
        movies: response.data
      })
    })
  }


  
  render(){
     return(
    <div>
        <Link to={`/movies/${this.props.id}`} >
      <h2>{this.props.title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{this.props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{this.props.metascore}</strong>
      </div>
      <h3>Actors</h3>
    </div>
  )
  }
 
}; 

export default MovieCard;