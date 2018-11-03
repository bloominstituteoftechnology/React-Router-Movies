import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import './index.css';
import App from './App';

ReactDOM.render(
<Router>
<App />

<div> 
 <Route exact path="/" component={MovieList}/>
 <Route path="/movies/:id" component={Movie}/>
 </div>

</Router>,
 document.getElementById('root'));


