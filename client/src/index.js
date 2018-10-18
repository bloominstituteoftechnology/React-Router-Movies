import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"; /*Imorting the router*/

import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); /* <BrowserRouter> </BrowserRouter> are the tags used to wrap the app in the router*/

