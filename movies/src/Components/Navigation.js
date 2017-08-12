import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
        <h1>Movies List</h1>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
    </div>
  );
};

export default Navigation;