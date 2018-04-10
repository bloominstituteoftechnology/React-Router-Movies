import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedList: props.list
    };
  }

  // removeMovie(e, title) {
  //   const movieArr = this.state.movieList.map(movie => movie.title);
  //   console.log(e, title);
  //   console.log(movieArr.indexOf(title));


  //   // const newState = this.state.movieList.filter(obj => {
  //   //   return obj.title !== title;
  //   // }) 

  //   this.setState({ movieList: [] });
  // }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div>
          <NavLink className="home-button" to="/">Home</NavLink>
          <button className="home-button" onClick={this.props.clearList}>Delete All</button>
        </div>
      </div>
    );
  }
}

// () => {this.setState({ savedList: [] })
{/* onClick={(e) => this.removeMovie(e, movie.title)} */} 