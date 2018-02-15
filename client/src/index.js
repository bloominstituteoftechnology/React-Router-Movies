import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

function Home() {
  return(
  <div>
    <MovieList />
    <Movie/>
  </div>)
}
function SelectMovie(props){
  return(
    <div>
    <Movie id={props.match.params.id}/>
    </div>
  )
}





  ReactDOM.render(


  <Router>
    <div>
    <Route path="/" component={Home} exact />
    <Route path="/movies/:id" component={SelectMovie} />
    </div>
  </Router>, document.getElementById('root')
);
