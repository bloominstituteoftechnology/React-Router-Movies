import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
const store = createStore(reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();