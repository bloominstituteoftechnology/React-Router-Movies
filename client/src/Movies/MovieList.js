import React, { Component } from 'react'
import axios from 'axios'

import MovieCard from './MovieCard'

export default class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
 //   console.log("test" , this.props);
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }))
  //      console.log("test2" , this.props);
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  render () {
 //   console.log("props", this.props);
  //  console.log(this.state.movies, "movie");
    return (
      <div className='movie-list'>
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} save={this.props.save} />
        ))}
      </div>
    )
  }
}

function MovieDetails ({ movie, save }) { console.log(save)
   // const { title, director, metascore, stars } = movie
  return <MovieCard {...movie} save={save} />
}
