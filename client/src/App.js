import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import Movie from './Movies/Movie'
import MovieCard from './Movies/MovieCard'
import movieList from './Movies/MovieList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  // const getMovies = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
    .then((response) => {
      setMovieList(response.data.results)
      console.log(response)
    })
    .catch(error => {
      console.error('server error', error);
    })
  }, [])




  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div className='App'>
      <nav>
        <h1 className='movie-title-header'>Awesome Movies!</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/movie'>Check out these movies!</Link>
        </div>
      </nav>
      <SavedList list={[ /* This is stretch */]} />

    <div>
      <Switch>
        <Route path={'/movie'}>
          <Movie items={movieList}/>
        </Route>

        <Route path={'/movie-card'}>
          <Movie items={movieList}/>
        </Route>

        <Route path={'/movie-list'}>
          <Movie items={movieList}/>
        </Route>
      </Switch>

      </div>
    </div>
  );

}
