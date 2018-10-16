import React, { Component } from 'react';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div onClick={() => goHome(this.props)} className="home-button">Home</div>
      </div>
    );
  }
}

function goHome(props) {
  props.history.push('/')
}