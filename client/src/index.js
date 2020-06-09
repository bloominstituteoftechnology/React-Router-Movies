import React from 'react';
import ReactDOM from 'react-dom';
//1. importing the BrowserRouter
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
//2. wrapping your app in a Router
<Router>
    <App />
</Router>,
document.getElementById('root'));