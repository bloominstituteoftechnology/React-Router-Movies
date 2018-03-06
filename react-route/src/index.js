import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/home.js';
import MovieDetails from './components/moviedetails.js';

ReactDOM.render(
  <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/movies/:id" component={MovieDetails} />
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);