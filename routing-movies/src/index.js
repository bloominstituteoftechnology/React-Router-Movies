import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
