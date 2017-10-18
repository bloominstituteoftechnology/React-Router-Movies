import React from 'react';
import './App.css';
import Home from './Home';
import Movie from './Movie';
import Nav from './Nav';
import NewMovie from './NewMovie';
import { Route, Link } from 'react-router-dom';

export default () => {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h1 className="title" > MOOVIES </h1>
          <div className="route-div">
            <Route exact path='/movies' component={Home} />
            <Route exact path='/movies/:name' component={Movie} />
            <Route path='/new-movie' component={NewMovie} />  
          </div>
          <Link to="/new-movie" >
            <img className="add" src="https://i.pinimg.com/originals/d5/34/3b/d5343b0da73ad91e130da7d1a57fc3bd.png" alt="add movie" />
          </Link>
        </div>
      </div>
    );
}
