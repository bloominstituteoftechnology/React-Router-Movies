import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
  //Redirect
} from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import MovieList from './components/MovieList';
import MovieDescriptions from './components/MovieDescriptions';
import AddMovie from './components/AddMovie';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <Switch>
        <Route exact path="/movies" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDescriptions} />
        <Route exact path="/movies/new-movie" component={AddMovie} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
