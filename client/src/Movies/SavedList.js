import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'; 
export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie,i) => (
          <NavLink activeStyle = {{fontWeight: 'bold', color:'red'}}key={i} to = {`/movies/${parseInt(movie.id,10)}`}><span className="saved-movie" key = {movie.id}>{movie.title}</span></NavLink>
        ))}
        <Link to = '/'> 
        <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
