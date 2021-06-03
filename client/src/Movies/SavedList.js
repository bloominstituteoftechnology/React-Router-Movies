import React from 'react';
import { useHistory } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory()

  const routeToHome = () => {
    history.push('/movies')
  }
  return (
    <div className="saved-list">
      <h3>My Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
      <button type='button' onClick={() => history.goBack()}> Home  </button> 
    </div>
  );
}
