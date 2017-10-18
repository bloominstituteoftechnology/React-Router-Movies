import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Navigation = () => {
  return (
    <div>
      <ul className="header">
        <h1>Movie List</h1>
          <div className="nav-bar">
          <li><Link to="/movies">Home</Link></li>
          <li><Link to="/new-movie">New Movie</Link></li>
        </div>
      </ul>
    </div>
  );
};