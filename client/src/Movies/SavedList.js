import React from 'react';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie,index) => (
        <span className="saved-movie"><p>{index,movie.title}</p></span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
}
