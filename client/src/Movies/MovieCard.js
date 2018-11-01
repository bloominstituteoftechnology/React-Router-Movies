import React from 'react';
import { Link, Route } from 'react-router-dom'
import Movie from './Movie'
import axios from 'axios'

class MovieCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movie: this.props.movies
    }
  }

  componentDidMount(){
    this.setState({
      // movies: this.props.movies

    })
    // const id = this.props.match.params.id
    // this.fetchMovie(id)
  }

  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id)
  //   }
  // }

  fetchMovie = id => {
    axios
    .get(`http://localhost:5000/api/movies/`)
    .then(response => {
      this.setState({
        movies: response.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }


  
  render(){
    // if (!this.state.movie) {
    //   return <div>Loading movie information...</div>;
    // }
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
      <h3>Actors:</h3>

    </div>
  )
  }
 
}; 

export default MovieCard;