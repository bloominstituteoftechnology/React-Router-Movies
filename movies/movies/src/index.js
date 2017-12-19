import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducer';

import MoviesList from './components/MoviesList/MoviesList';
import MoviesInfo from './components/MovieInfo/MovieInfo';

import './index.css';

ReactDOM.render(
  <Provider store={ applyMiddleware(ReduxPromise)(createStore)(reducers) }>
    <Router>
      <div>
        <Route path="/movies/:id" component={ MoviesInfo } />
        <Route exact path="/" component={ MoviesList } />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);