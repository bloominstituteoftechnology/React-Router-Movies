import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
// Import Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieInfo from './components/MovieInfo';
// Import CSS
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:id" component={MovieInfo} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
