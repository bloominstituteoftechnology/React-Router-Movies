import React from 'react';

const routeToHome = () => {
  <Link to="/">Home</Link>
};

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}
