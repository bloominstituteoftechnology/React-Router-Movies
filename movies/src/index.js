import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListOfMovies from './listOfMovies';
import SingleMovie from './SingleMovie';
import reducers from './reducers';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store ={createStoreWithMiddleware(
      reducers,
      window._REDUX_DEVTOOLS_EXTENSION_ &&
      window._REDUX_DEVTOOLS_EXTENSION_()
    )}
  >

    <Router>
      <div>
      <App />
      <Route exact path ="/" component={ListOfMovies} />
      <Route exact path ="/:id" component={SingleMovie} />
      <Route exact path ="/" component={ListOfMovies} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
