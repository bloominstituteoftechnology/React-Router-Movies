import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from './components/Movies';
import Movie from './components/Movie';
import NewMovie from './components/NewMovie';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movies" component={Movies}/>
        <Route path="/movies/:id" component={Movie}/>
        <Route path="/new-movie" component={NewMovie}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
