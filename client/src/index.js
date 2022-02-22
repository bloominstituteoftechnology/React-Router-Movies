import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    // *Step 1 from Guided Project
    <Router>
        <App />
    </Router>

, document.getElementById('root'));

/**Router wrapping App gives access to..
 * 1. history: 
 * 2. match:
 * 3. location:
 */