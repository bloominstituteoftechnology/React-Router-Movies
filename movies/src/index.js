import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav/Nav';
import Movie from './components/Movie/Movie';
import Home from './components/HomePage/HomePage';
import NewMovie from './components/NewMovie/NewMovie';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import moviesReducer from './reducers/moviesReducer';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(moviesReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='appWrap'>
                <Nav />
                <Route exact path='/' component={Home} />
                <Route path='/movie/:id' component={Movie} />
                <Route path='/new-movie' component={NewMovie} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);