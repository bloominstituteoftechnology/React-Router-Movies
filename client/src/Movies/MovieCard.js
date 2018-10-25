import React from 'react';
import axios from 'axios'


class MovieCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    }

  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/movies')
    .then(response => {
      this.setState(() => ({movies: response.data}))
    })
    .catch(error => {
      console.error('Server Error', error)
    })
  }

  function = MovieDetails({ movie }){
    const {title, director, metascore, stars} = movie
  }
  render(){
    return(
      <div>
      {this.state.movies.map((movie, index) => <div key={index}>
      {movie.title}
      {movie.movie}
      </div>)}
      </div>
    )
  }
}
export default MovieCard;
