import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

//Part 1
//Wrap your app with the router.
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Router><App />
    </Router>, document.getElementById('root'));