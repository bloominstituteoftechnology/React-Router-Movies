import React from 'react';
import ReactDOM from 'react-dom';
// Step One: Import the needed dependencies from react-router-dom //
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// Step Two: Wrap the app component in a route 
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
