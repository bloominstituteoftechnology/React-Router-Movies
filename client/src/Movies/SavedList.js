import React from 'react';

function Home(props) {
  const routeHome = () => {
    props.history.push("/");
  }
};
return (
  const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
      ))}
    <button onClick={routeHome} className="home-button" >Home</button>
  </div>
));





export default SavedList;
