import React from 'react';
import { Link } from "react-router-dom";


function Home(props) {
  console.log("Home", props)
  const routeHome = () => {
    this.props.history.push("/");
  }
  return routeHome;
};
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to= '/'> <button onClick={Home} className = "home-button">Home</button> </Link>
  </div>
);


export default SavedList;
