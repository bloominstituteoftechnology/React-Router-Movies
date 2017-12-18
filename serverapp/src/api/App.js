import React, { Component } from 'react';
import Movies from './api/movies';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Miss
} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/app" component={App} exact />
            <Route path="/api/movies" component={Movies} />
            <Route path="/api/movies/:id" component={Movie} />
            <Miss component={PageNotFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
  )
  
