import React from 'react';
import { Link } from 'react-router-dom';

export const SavedList = props => {
    if(props.list.length < 1) {
      return (
        <div className="saved-list">
          <Link to="/"><button>Home</button></Link>
          <h3>Saved Movies:</h3>
          <h5>You haven't saved any movies yet!</h5>
        </div>
      )
    }
    return (
      <div className="saved-list">
        <Link to="/"><button>Home</button></Link>
        <h3>Saved Movies:</h3>
        {props.list.map(movie => {
          console.log(movie);
          return (
            <div key={movie}>
              {movie}
            </div>
          )
        })}
      </div>
    )
}

