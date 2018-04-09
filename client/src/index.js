import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList'
import Movies from './Movies/Movie'
import App from './App';

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));
