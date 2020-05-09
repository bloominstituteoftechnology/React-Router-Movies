import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  //const addToSavedList = movie => {
  //  setSavedList([...savedList, movie]);
  //};

  return (
    <div>
        <SavedList list={savedList} />
        <nav className='nav'>
          <Link to='/'>Movie List</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route path='/movies/:id' render={props => (<Movie {...props}/>)}/>
        </Switch>
    </div>
  );
};

export default App;
