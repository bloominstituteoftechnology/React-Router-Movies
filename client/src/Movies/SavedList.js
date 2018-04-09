import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink } from '../../node_modules/reactstrap/lib';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          <div className="savedItems">
            {this.props.list.map((movie, index) => (
              <Link to={`/movies/${movie.id}`} key={movie + index}>
                <NavLink>
                  <span className="saved-movie">{movie.title}</span>
                </NavLink>
              </Link>
            ))}
          </div>
          <Link to={"/"}><div className="home-button">Home</div></Link>
        </div>
    );
  }
}
