import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';

export const Navigation = () => {
  return (
    <div className='NavBar'>
      <Link to='/'>Home</Link>
      <Link to='/movies'>MoviesList</Link>
      <Link to='/addmovie'>Add A Movie</Link>
    </div>
  )
};
