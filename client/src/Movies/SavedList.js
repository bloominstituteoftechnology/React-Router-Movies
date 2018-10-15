import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    movie: null,
    }
  }

  deleteMovie = () => {
    const removeFromSavedList = this.props.addToSavedList;
    removeFromSavedList(this.state.movie)
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie" onClick={this.deleteMovie}>{movie.title}</span>
        ))}
        <Link to='/'><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
