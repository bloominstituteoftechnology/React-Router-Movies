import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMovie} from '../../actions'

class MoviePage extends Component {
  componentDidMount = () => {
    this.props.getMovie(this.props.match.params.id)
  }
  render() {
    const {movie} = this.props
    return (
      <div>
        <h2>{movie.title}</h2>
        <h4>Director: {movie.director}</h4>
        <div>Metascore: {movie.metascore}</div>
        <p>Starring:</p> 
        <ul>{movie.stars ? movie.stars.map((name, i) => (<li key={i}>{name}</li>)):null}</ul>
        <Link to="/">Back to movie list</Link>
      </div>
    )
  }
}

const mapStateToProps = ({movies}) => ({
  movie: movies.selected
})

export default connect(mapStateToProps, {getMovie})(MoviePage)

