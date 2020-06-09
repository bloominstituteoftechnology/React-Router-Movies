import React, { useState, useEffect } from 'react';
import axios from 'axios';
//3. import Route
//5. import link
import {Route, Link} from "react-router-dom"
//7. importing the MovieList
import MovieList from "./Movies/MovieList"
// //9. importing data
// import data from "../../server";
// 12. import movies
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  // //10. Setting the initial varible to a useState
  // const [movies] = useState(data)

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

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
     //4. Rendered a component in the route
     //5. One route that will take an id parameters after movies
     //6. Adding the Link to route to CHECK
     //8. Opening a Route for the MovieList
     //11. Passing down the movies
     //13. adding Movie Route
    <div>  
      <SavedList list={savedList} />
      <Route exact path = "/">
        <MovieList movies = {movieList} />
      </Route>
      <Route path = "/movies/:movieID">
        <Movie />
      </Route>
      {/* <Route render={props => <Movie {...props} addToSavedList={addToSavedList} />}  path ="/movies/:movieID"/> */}
    </div>
  );
};

export default App;
