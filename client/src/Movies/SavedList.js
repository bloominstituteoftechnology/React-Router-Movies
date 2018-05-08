import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="saved-list">
        <h3 >Saved Movies:</h3>
        {this.props.list.map( movie => {
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
              <div className="saved-movie">{movie.title}</div>
            </Link>
          )
        })}
        <div>
          <Link  className="home-button" to="/">Home</Link>
        </div>
      </div>
    )
  }
}