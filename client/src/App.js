import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
// {/*  */}

export default function App () {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') 
        .then(res => {
          // console.log(res.data);
          setMovieList(res.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  // console.log(movieList) // arr of 6 objs ~ [ 0: {id: 0, title: "The Godfather", director: "Francis Ford Coppola", metascore: 100} ]
  return (
    <>
      <Link to="/"> Home </Link>
      {/* <Link to='movies/:id'> Movie </Link>  */}

      <Route exact path='/' render={() => <MovieList movies={movieList}/> }/>   
      <Route path='/movies/:id' Movie movie={movieList}/>        
    </>
  );
}
