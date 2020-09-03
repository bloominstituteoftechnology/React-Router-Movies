import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import { Card } from "reactstrap"
import axios from 'axios';

import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data)
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
    setSaved([...saved, id]);
  };

  return (
    <Card style={{backgroundImage: "url(https://www.tvovermind.com/wp-content/uploads/2018/06/32-2.jpg)", backgroundPosition: "center" }}>
      <SavedList list={[SavedList]} />
      <div>

      <Route exact path ="/" ><MovieList movies={movieList} /></Route>
      
       <Route path = "/movies/:id" component={Movie} />
      </div>
      
    </Card>
  );
};

export default App;
