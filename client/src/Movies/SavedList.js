import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <span className="saved-movie">{movie.title}</span>
        ))}
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
