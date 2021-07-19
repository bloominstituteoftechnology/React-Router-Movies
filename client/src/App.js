/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.3.1 React Router Project app.js
 * 7/19/2021
 **/

//import statements
import { Route, Switch} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

//App function definition
export default function App () 
{
  //const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  //useEffect hook function
  useEffect(() => 
  {
    //Get movie function
    const getMovies = () => 
    {
      //axios.gets the url
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => 
        {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })

        //.catch in the event of an error
        .catch(error => 
        {
          //Log the error
          console.error('Server Error', error);
        }
      );
    }

    //Call the getMovies function
    getMovies();

    //Empty [] to prevent infinite calls
  }, []);

  // const addToSavedList = id => 
  // {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };
  
  //Return function
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />       
        <Switch>

          {/**Rout uses "path" prop */}
          <Route path = "/">
            {/**injects movie */}
            <MovieList movies = { movieList }/>
          </Route>
          
          {/**Rout uses "path" prop */}
          <Route path = "/movies/:movieID">
            {/**References movie list through the dynamic "id" */}
            <Movie movie = {movieList}/>
          </Route>
        </Switch>  
    </div>
  );
}
