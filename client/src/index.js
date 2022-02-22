import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
render(
<Router>
    <App />
</Router>
, document.getElementById('root'));
