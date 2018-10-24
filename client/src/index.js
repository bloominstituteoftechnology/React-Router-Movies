import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

// App wrapped in router element

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));