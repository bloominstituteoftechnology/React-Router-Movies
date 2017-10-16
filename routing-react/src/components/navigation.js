import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="App">
        <h1 className='title'>Movie Website!</h1>
        <div>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/movies">Movies</Link>
          <Link className="link" to="/addmovies">Add movie!</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;