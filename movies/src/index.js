import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
//import configureStore from './store/ConfigureStore';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers/Movies'

import {getMovies} from "./actions/Movies";
import axios from 'axios';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

//axios.get('http://localhost:5000/movies').then((response) => store.dispatch(getMovies(response.data)));

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();