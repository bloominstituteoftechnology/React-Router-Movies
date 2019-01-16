import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedMovies: []
    }
  }

  componentDidMount = () => {
    this.setState({savedMovies: this.props.movies});
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.state.savedMovies.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}  activeClassName="saved-active" className="saved-movie">{movie.title}</NavLink>
        ))}
        <NavLink to="/" className="home-button"  activeClassName="saved-active">Home</NavLink>
      </div>
    );
  }
}
