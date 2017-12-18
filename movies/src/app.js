import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import 


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
 )