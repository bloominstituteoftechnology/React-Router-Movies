import React from 'react';

function HomeButton(props) {
  props.history.push('/');
}
const SavedList = props => (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={() => HomeButton(props)}>Home</div>
  </div>
);




export default SavedList;