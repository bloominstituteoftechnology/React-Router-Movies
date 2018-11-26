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
        {this.props.list.map((movie, index) => (
         <NavLink to={`/movies/${movie.id}`} style={{textDecoration: 'none', color: 'black'}} activeStyle={{fontWeight: 'bold', color: 'lightseagreen'}}><span className="saved-movie" key={index}>{movie.title}</span></NavLink>
        ))}
        
        <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
        
      </div>
    );
  }
}
