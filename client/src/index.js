import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
//rendering the app wrapped in the router so i can host things localy? i think
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
