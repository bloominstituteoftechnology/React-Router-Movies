import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/Movies';
import Movie from './components/Movie';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PageNotFound from './PageNotFound';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from 'reducer';

import './index.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
ReactDOM.render (
	<Provider store = {store}>
		<Router>
			 <Switch>
			 	<Route path="/components/movies/:movieId" component={Movie} />
			 	<Route path="/components/movies" component={Movies} />
			 	<Route path="/components/app" component={App} />
			 	<Route component={PageNotFound} />
			 </Switch>
	 	</Router>
	</Provider>,
	 document.getElementById('root')    
   
 );
// const store = createStore(rootReducer, 
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(store);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// 	, document.getElementById('root'));
// registerServiceWorker();