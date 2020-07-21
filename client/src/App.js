import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, useHistory} from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
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
 
  const addToSavedList = id => {
   let skip = false
    let addedMovie = movieList.find(movie => {
      return movie.id == id;
    })
    saved.forEach(item => {
      if (item.id === addedMovie.id){
        skip = true
      }
    })
    if (skip === false) {
      setSaved([...saved, addedMovie])
    } else {
      console.log(saved);
    }
    
    
  };
console.log(saved);

  return (
    <div>
      <SavedList list={saved} />

      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>

      <Route path='/movies/:movieID'>
        <Movie movies={movieList} addToSavedList={addToSavedList}/>
      </Route>

    </div>
  );
};

export default App;
