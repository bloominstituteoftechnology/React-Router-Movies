import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoviesList from './MoviesList';

export const Navigation = () => {
  return (
    <div>
      <Link to='/movies'>MoviesList</Link>
    </div>
  )
};
