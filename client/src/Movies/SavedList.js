import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SavedList extends Component {
  render () {
    return (
      <div className='saved-list'>
        <h3>Saved Movies:</h3>

        {this.props.list.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            style={{ textDecoration: 'none' }}
          >
            <span className='saved-movie'>{movie.title}</span>
          </Link>
        ))}

        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className='home-button'>Home</div>
        </Link>
      </div>
    )
  }
}
