import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reducers from './reducers';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render (
    <Provider  store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
        <div className='body'>
            <Route path='/' component={Home} exact/>
            <Route path='/movie/:id/' component={Movie}/>
        </div>
    </Router>
    </Provider>,
    document.getElementById('root')
)