import React from 'react';

export default function SavedList(props) {
  const showHomePage = () => {
    window.location.href = `/`;
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={showHomePage}>
        Home
      </div>
    </div>
  );
}
