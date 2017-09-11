import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './reducers';
import Movies from './components/Movies';
import Synop from './components/Synop';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}>
    <BrowserRouter>
        <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:id" component={Synop} />
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
