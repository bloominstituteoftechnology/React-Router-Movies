import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const creatStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={creatStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <App />
    </Router>
  </Provider>,

document.getElementById('root'));

