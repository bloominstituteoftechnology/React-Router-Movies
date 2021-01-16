import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // console.log("Res: ", response);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!saved.includes(id)) {
    
      let savedCopy = [...saved];
      savedCopy.push(id);
      setSaved(savedCopy);
      console.log ("saved: ", saved)
    }
  };

  return (
    <div>
           <SavedList list={saved} />

      <Switch>
        <Route path='/movies/saved'>
          <SavedList list={saved} />
        </Route>
       
        
        <Route path='/movies/:movieId'>
          <MovieCard movieList={movieList}/>
        </Route>

        <Route path={'/'}>
          <MovieList addToSavedList={addToSavedList} movieList={movieList}/> 
        </Route>
      </Switch>
    </div>
  );
}


