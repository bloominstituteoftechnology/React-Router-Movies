import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
