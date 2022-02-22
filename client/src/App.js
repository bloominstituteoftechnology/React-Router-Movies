import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    const temp = [...saved]
    temp.push(movieList.filter(val=>val.id === movie.id)[0]); 
    setSaved(temp);
  };

  return (
    <div className='app'>
       <SavedList list={saved}/>
      <div>
        <Switch>
          <Route path={'/movies/:itemID'}>
         
            <Movie addToSavedList={(title)=>addToSavedList(title)} movies={movieList}/>
          </Route>
          <Route path={'/'}>
            <MovieList movies={movieList}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
