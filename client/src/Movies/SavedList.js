import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = ({list}) => {

    const savedMovies = new Set()

    list.forEach(movie => 
      savedMovies.add(
        React.createElement(
          Link, 
          {to: `/movies/${movie.id}`,
           key: movie.id,
           className: 'saved-movie'},
          movie.title
        )
      )
    )

    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {Array.from(savedMovies)}
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
}

export default SavedList

