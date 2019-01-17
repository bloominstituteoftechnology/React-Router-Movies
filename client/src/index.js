import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //Import Router
import './index.css';
import App from './App';
//Wrap the App with Router
//Always wrap the index.js wrap.

ReactDOM.render(<Router>
                    <App /> 
                    </Router>, 
                                document.getElementById('root'));
