import {createStore, applyMiddleware} from 'redux';
import MovieReducer from '../reducers/Movies';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default () => {
  return createStoreWithMiddleware(MovieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}