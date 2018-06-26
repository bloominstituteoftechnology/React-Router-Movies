import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  goToLink = (url) => {
    this.props.history.push(url);
    
  }
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, i) => (
          <span className="saved-movie" key = {i} onClick={() => {
            this.goToLink(`/movies/${movie.id}`);
            }}>{movie.title}</span>
        ))}
        <Link to = '/' className="home-button">Home</Link>
      </div>
    );
  }
}
