import React from 'react';

const myFunction = () => {
  window.location.href = "http://localhost:3000" // This Works, but reloads the page entirely
  // history.push(null,null,'/') // Does not work?
  // history.pushState(null,null,'/') Does not work?
}

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div id="homeButton" onClick={myFunction} className="home-button">Home</div>
  </div>
);

export default SavedList;
