import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//BrowserRouter^^^ adheres to the 'history API' - that's what we want 

// You'll need to wrap <App /> for routing to work

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
