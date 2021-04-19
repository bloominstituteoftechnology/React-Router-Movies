import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SavedList(props) {

  const history = useHistory();

  const clickHandler = () => {

    history.push('/');

  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <SavedDetails key={movie.id} movie={movie} />
      ))}
      <div className="home-button" onClick={() => clickHandler()}>Home</div>
    </div>
  );
}

function SavedDetails(props) {

  const { title, id } = props.movie;

  return (
    <span className="saved-movie">{title}</span>
  );

}