import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('from savedlist=', this.props)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} activeClassName="my-movie"> {movie.title}</NavLink>
        ))}
        <NavLink to='/'><div className="home-button">Home</div></NavLink>
      </div>
    );
  }
}
