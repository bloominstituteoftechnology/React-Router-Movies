import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  console.log(props)
 
  useEffect(() => {
    const id = Number(props.match.params.id);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          // console.log(response)
          setMovie(response.data);
        })
         
        .catch(error => {
          console.error(error);
        });
        
        
          
  },[props.match.params.id]);

  console.log(movie)
        return(
          <div> <MovieCard title = {movie.title} director= {movie.director} metascore = {movie.metascore} stars= {movie.stars} /> </div>
        )
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }
}

export default Movie;
