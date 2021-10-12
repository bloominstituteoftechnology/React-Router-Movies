import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie  from './Movies/Movie';
import MovieList  from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
            console.log(res.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);

        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
 

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Movie />
      <div>
      <BrowserRouter>
        <Link to="/">MovieList</Link>
        </BrowserRouter>
        

        
        
       
      </div>
    </div>
  );
}
