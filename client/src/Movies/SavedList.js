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
        {this.props.list.map(movie => (
          <NavLink to= {`/movies/${movie.id}`} activeStyle={{
		     textDecoration:'none',color:'black'
		   }}>{movie.title}</NavLink>
        ))}
//The this.props.list.map part was already there, thank goodness, because while I have a decent understanding of mapping I think it would have taken me about an hour to get the this.props.list part. I have no idea why that works but I've seen similar constructions before so I think I would have eventually stumbled upon it from previous code or by searching the internet. Please don't ask me why it has to be this.props.list because I have no idea. I just know it works. I stole the NavLink (with the ``!) from MovieList.js so that it would display an actual link to the movie instead of just a text title.
	
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
     </div>
    );
  }

}
