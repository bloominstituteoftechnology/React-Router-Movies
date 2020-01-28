import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Home() {
  const history = useHistory();

  const routeToHome = event => {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };
  return(
    <div>
    <button onClick={routeToHome} className='home-button'>Home</button>
    </div>
  )
};

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to={`Movie`}>
      <div className="home-button">
        Home
        </div>
    </Link>
  </div>
);

export default SavedList;
