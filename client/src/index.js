/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.3.1 React Router Project index.js
 * 7/19/2021
 **/

//Import statements
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work

//Render function
render(

    //Main app is wrapped in the router
    <Router>
        <App />
    </Router>
    ,document.getElementById('root')
);
    
