import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';


import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render( <Router><App /></Router>, document.getElementById('root'));


// ALTERNATE WAY TO CODE THIS

// import { BrowserRouter as Router } from 'react-router-dom';

// render(
//   // Wrap the <App /> in a provider
//   <Router>
//     <App />
//   </Router>,
//   document.querySelector('#root')
// )