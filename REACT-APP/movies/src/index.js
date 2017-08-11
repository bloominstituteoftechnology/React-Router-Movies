import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import moviesReducer from './reducers';
import ReduxPromise from 'redux-promise';
import MoviesList from './components/MoviesList';
//import { BrowserRouter as Router } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStore(moviesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
        {/* <Router>
            <App />
        </Router> */}
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
