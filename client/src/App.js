import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'

import SavedList from './Movies/SavedList';
import {Route, useParams} from 'react-router-dom'
import MovieList from './Movies/MovieList' 

const App = (props) => {
  console.log('App props', props)
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const params = useParams()
  console.log('Parameters:', params)

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log('Axios response:', response.data)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route path='/'> 
        <SavedList list={savedList} />
      </Route>
      <Route path='/'> 
        <MovieList movies={movieList}/>
      </Route>
      {/* <Route path */}
    </div>
  );
};

export default App;
