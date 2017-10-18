import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <ul className="header">
        <h1>Movie List</h1>
          <div className="nav-bar">
          <button><li><Link to="/movies">Home</Link></li></button>
          <button><li><Link to="/new-movie">New Movie</Link></li></button>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;