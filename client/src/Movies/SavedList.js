import React from 'react';
import { useHistory } from 'react-router-dom';

const SavedList = (props) => {
  const history = useHistory();
function goHome (event) {
  history.push("/");
}
return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie" key={movie.id}>{movie.title}</span>
      ))}
      <div onClick={goHome} className="home-button">Home</div>
  </div>
);
    }   
export default SavedList;
