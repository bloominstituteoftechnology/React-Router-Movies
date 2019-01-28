import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink className="saved-movie" to={`/movie/${movie.id}`} className="saved-movie">
          {/* {if(movie.title.length > 20) movie.title.substring(0, 20)} */}
          {movie.title.length > 20 ? movie.title.substring(0,20)+ '...' : movie.title  }

          </NavLink>
        ))}
        <div>
          <div onClick={() => this.props.history.push('/')} className="home-button">Home</div>
          <div onClick={() => window.location.reload()} className="home-button">Erase</div>
        </div>
      </div>
    );
  }
}
