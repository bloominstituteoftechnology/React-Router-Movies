{/* This is totally copied from class today */}
{/* My understanding of this is that you need this or else none of your Routes or Links will work */}
{/* You wrap your app inside the router so that everything inside has access to the router functionality*/}
{/* I understand the importing part pretty well, and when I forget something, the compiler lets me know*/}


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
