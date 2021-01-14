import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';






export default function App () {
  //const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

 // const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once


  return (
    
    <div>
      <nav className="nav-title">
        <div> Movie List </div>
        <div className="nav-links">
          
        <Route exact path="/">    
          <MovieList movies={movieList}/> 
        </Route> 

        <Link to="/">Home</Link>

{/* Quick Summmary - trying to render slash route but componet prop had to be used. When fixed Movie prop was not being identiied. Not using compent prop but passing MovieList to App as the Child which rendered the Movie List /// Prop wasn't defined //  */}
        <Route path ="/movies/:id"> 
          <Movie movies={movieList} />
        </Route>

        <Link to="/movies/">Movie</Link>


          </div> 
        </nav> 
        

        
      </div>


    
 
  );
}
