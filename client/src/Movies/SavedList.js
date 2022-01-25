import React from 'react';
import { useHistory } from 'react-router';

const history = useHistory();

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">
        <button type ='button' onClick={() => history.goBack()}>
          Go Back Home
        </button>
        </div>
    </div>
  );
}
