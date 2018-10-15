import React, { Component } from 'react';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  returnHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button" onClick={this.returnHome}>
          Home
        </div>
      </div>
    );
  }
}
