import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import './App.css';


const App = () => {
  const [savedList, setSavedList] = useState([]);
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

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      {/* <Route path='/' render={props=>} */}
      <SavedList list={savedList} />
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
              <Link to="/">Home</Link>
              <Link to={{
                    pathname: "/about", 
                    search: "?nam=about", 
                    hash: "#theAbout",                               state: {
                      from: "home page", 
                },     
              }}>About</Link>

              <Link to="/nav3">Nav3</Link>

              <Route exact path="/" component={Home} 
              Route path='/users/:id' render={props => {
                const {id} = props.match.params;
              return <div>The id is {id}</div>}}/>

              <Route exact path="/about" component={About} render={props => { return <h3>About stuff nobody cares</h3>;}}/>
              <Route exact path="/nav3" component={Nav3} />
          </BrowserRouter>

        </header>
      </div>
    </div>
  );
};

export default App;
