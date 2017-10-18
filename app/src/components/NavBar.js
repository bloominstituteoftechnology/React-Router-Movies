import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="header">
      <Link className="title" to="/">Home</Link>
      <Link className="title" to="/movies">Movies Playing Near Me</Link>
      <input className="title" placeholder="Search" />
    </div>
  );
};

export default NavBar;
