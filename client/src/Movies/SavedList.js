import React, { Component } from 'react';
import { BroswerRouter as Router} from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName='active-movie' style={{textDecoration:'none' }}>
          <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className='home-button'>
        <Link to='/' style={{color: '#463F34', textDecoration: 'none'}}><strong>Home</strong></Link>
        </div>
      </div>
    );
  }
}
