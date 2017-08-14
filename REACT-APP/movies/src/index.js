import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import MoviesList from './components/MoviesList';
import MovieInfo from './components/MovieInfo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router>
            <div>
                <Route exact path="/" component={MoviesList}/>
                <Route path="/:id" component={MovieInfo}/>
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

