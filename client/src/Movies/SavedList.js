import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>

{/* I stole this from previous code and someone helped me with the ``, which I had forgotten */}
        {this.props.list.map(movie => (
          <NavLink to= {`/movies/${movie.id}`} activeStyle={{
		     textDecoration:'none',color:'black'
		   }}>{movie.title}</NavLink>
        ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
     </div>
    );
  }

}
