import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  // handleClickedSavedMovie(){
  //   this.props.
  // }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return(
            <Link key={movie.id}
                  to={`/movies/${movie.id}`}>
              {/* <span className="saved-movie" 
                    onClick={()=>{this.props.history.push(`/movie/${movie.id}`)}}> */}
                {movie.title}
              {/* </span> */}
            </Link>
          )})}
        <div className="home-button" onClick={() =>{this.props.history.push("/")}}>Home</div>
      </div>
    );
  }
}
