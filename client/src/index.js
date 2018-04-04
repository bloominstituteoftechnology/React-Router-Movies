import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";


import './index.css';
import  MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieList';
import Movie from './Movies/Movie'

import { BrowserRouter as Router, Route } from 'react-router-dom';


const Home = (props) =>{
  return(
    <div>

      <MovieList/>
      <Route path={`${props.match.path}/movies/:id`} component={Movie} />
    </div>

  )
}

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>

        <Movie/>
        <MovieCard/>
        <Route exact path="/" component={MovieList} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
    {/* <MovieList/> */}
  </Router>,
  document.getElementById('root')
);

