import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllMovies} from '../../actions'
import {Movie} from '../'

class List extends Component {
  componentDidMount = () => {
    this.props.getAllMovies()
  }
  render () {
    const {movies} = this.props
    return (
      <div>
        {movies.map(movie => (
          <Movie key={movie.id} expanded={false} movie={movie}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list
  }
}

export default connect(mapStateToProps, {getAllMovies})(List) 

