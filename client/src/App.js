import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Route, Link, Switch } from "react-router-dom";
import MovieList from './Movies/MovieList'



import SavedList from './Movies/SavedList';

{/* <Route exact path="/" movies={SavedList}/>
<Route path="/movie" movies={Movie}/> */}

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

function Home(props){
  const { push } = props.history;
  return <h1>Home Component</h1>;
  <button onClick={() => push('/')}>back home</button>
}
function Movie(props){
  return <h1>Movie Component</h1>;
}
function MovieList(props){
  return <h1>Movie List Component</h1>;
}

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

      <div>
        <BrowserRouter>
    <Switch>
      <Route path = '/movies/movie:ID'>
        <Movie movie = {movieList}/>
      </Route>
      <Route path = '/'>
        <MovieList movies = {movieList} />
      </Route>
    </Switch>
    </BrowserRouter>
      </div>
    </div>
  );
}

// <BrowserRouter>
// <Link to='/'> Home </Link>
// <Link to='/movie'> Movie </Link>
// <Link to='/movielist'> Movie List </Link>

// <Route  exact path='/' component={Home} />
// <Route path='/movie' component={Movie} />
// <Route path='/movielist' component={Movie List} />
// </BrowserRouter>