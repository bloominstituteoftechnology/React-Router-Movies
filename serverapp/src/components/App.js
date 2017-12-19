import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Movies from './Movies';
import Movie from './Movie';
import './App.css';
import PageNotFound from './PageNotFound';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Miss
} from 'react-router-dom';

ReactDOM.render (
   
   <Router>
        <Header />
        <Switch>
            <Route path="/api/movies/:movieId" component={Movie} />
            <Route path="/api/movies" component={Movies} />
            <Route path="/app" component={App} />
            <Route component={PageNotFound} />
        </Switch>
    </Router>,
    document.getElementById('root')    
  
)
   
  
