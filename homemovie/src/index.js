import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Providers } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react router-dom';

import ./index.css';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import reducers from './reducers';

const createStorewithMiddleware = applyMiddleware(ReduxPromise)(createStore)

function NavBar() {
    return <div>Navigation Bar</div>;
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
     <div>
         <NavBar />
         <Route exact path="/" component={Movies} />
         <Routhe path="/movies/:id" component={MovieDetails} />
    </div>
   </Router>, 
   </Provider>,
document.getElementById('root')
};
             
             
             
           