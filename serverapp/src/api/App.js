import React, { Component } from 'react';
import Movies from './api/movies';
import Movie from './api/movie';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Miss
} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route path="/api/Movies/:movieId" component={Movie} />
            <Route path="/api/Movies" component={Movies} />
            <Route path="/app" component={App} />
            <Miss component={PageNotFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
  )
  
