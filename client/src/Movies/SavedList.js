import React from 'react';
import {useHistory} from 'react-router-dom'



const SavedList = props => (
  let {home} = props;

 
<div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div onClick={home} className="home-button">Home</div>
  </div>
);

export default SavedList;
