import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import reduxPromise from 'redux-promise'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , 
  document.getElementById('root')
)
registerServiceWorker()
