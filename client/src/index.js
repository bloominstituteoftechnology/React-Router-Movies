import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
render(
    // Wrap the <App /> in a provider
    <Router>
      <App />
    </Router>
    , document.querySelector('#root')
  )