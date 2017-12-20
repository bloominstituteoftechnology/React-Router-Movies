import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getMovies } from './actions';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import App from './App';
import Home from './components';
import Movie_Details from './components';

import {
    BrowserRouter as Router,
    Route, 
} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/movie-details" component={Movie_Details} />
        </div>
    </Router>
    </Provider>
,document.getElementById('root'));