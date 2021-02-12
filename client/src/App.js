import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log('The API says Yey!')
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    
    const innerSearch = (list, funID) => {
      return list.find(e => e.id == funID)
    }

    if(!innerSearch(saved, id)) {
      let newList = saved;
      newList.push(innerSearch(movieList, id))
      setSaved(newList)
      // console.log(newList)

    } else {
      console.log('This movie already exist in the list')
    }

  };

  return (
    <div>
      <SavedList list={saved} />

      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path='/movies/:id'>
          <Movie addToSavedList={addToSavedList} />
        </Route>
        <Route path='/'>
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
