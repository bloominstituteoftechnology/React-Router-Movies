import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import MovieSelected from './components/MovieSelected';

import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div className="container">
        <Route exact path="/" component={App} />
        <Route path="/movies/:id" component={MovieSelected} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);