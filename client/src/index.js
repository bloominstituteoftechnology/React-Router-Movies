import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import './index.css';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <App />
    <Route path='/movies' component={Movies} exact />
    <Route path='/movies/:id' component={MovieDetail} /> 
  </div>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

