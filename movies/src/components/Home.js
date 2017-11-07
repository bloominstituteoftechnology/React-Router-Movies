import React from 'react';
import './Navigation.css';

const Home = () => {
  return (
    <div className = "MovieNavigation">
      <h1>Movie List. Select A movie:</h1>
          <Link className="movie-link" to="/" exact>Home</Link>
          <Link className="movie-link" to="/godfather">The GodFather</Link>
          <Link className="movie-link" to="/starwars">Star Wars</Link>
          <Link className="movie-link" to="/lotr">The Lord the Rings</Link>
    </div>
  );
};

export default Home;