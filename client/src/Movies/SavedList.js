import React from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function SavedList(props) {

  let history = useHistory()

  const handleClick = () => {
    history.push('/home')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
      ))}
      <div className="home-button" onClick={() => handleClick()}>Home</div>
    </div>
  );
}
