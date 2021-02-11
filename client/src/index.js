import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"; // imported browserRouter

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
// wrapped App in Router