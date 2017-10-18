import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';

let store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={store(reducers, window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
