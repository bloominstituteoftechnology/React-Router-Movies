import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Movie } from './Movies/Movie'
import { MovieList } from './Movies/MovieList'

import { SavedList } from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    console.log("Saving: " + id);
    if (saved.includes(id)) {
      // do nothing
    } else {
      setSaved([...saved, id]);
    }
  };

  return (
    <Router>
      <Switch>
        <div>
          <SavedList list={saved} />

          <div>Replace this Div with your Routes</div>
          <Route exact path="/" component={() => <MovieList movies={movieList} />} />
          <Route path="/movie/:id" component={Movie} />
        </div>
      </Switch>    
    </Router>
  );
}
