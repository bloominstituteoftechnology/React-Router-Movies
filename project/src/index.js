import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';


const creatStoreWithMiddleWare = applyMiddleWare(ReduxPromise)(createStore);



ReactDOM.render(
<Provider store={creatStoreWithMiddleWare(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <App />
</Provider>,
document.getElementById('root'));

