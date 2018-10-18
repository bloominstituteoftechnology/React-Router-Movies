import React, { Component } from 'react';
import {Link} from "react-router-dom"; /*Importing the link component (replacement for anchor tag) from react router dom*/

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
        <Link to="/"><div className="home-button">Home</div></Link> {/*Wrapping the home button in a link component that links it to "/" otherwise known as the home page*/}
      </div>
    );
  }
}
