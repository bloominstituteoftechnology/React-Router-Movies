/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.3.1 React Router Project Movie.js
 * 7/19/2021
 **/

//Import statements
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Movie function definition, pass in props
export default function Movie(props) 
{
  //Set movie state
  const [movie, setMovie] = useState();
  const {id} = useParams();

  //const movieItem = movieItem.find(movieItem  => movieItem.id == id);
 
  
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  // Maybe find()

  //Use effect hook function
  useEffect(() => 
  {
    axios
    //Get the url with id
    .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
    
    //.Then() accepts the data
    .then(response => 
    {
      // Study this response with a breakpoint or log statements
      // and set the response data as the 'movie' slice of state

      //invoke setMovie() to set the movie data
      setMovie(response.data);

    })

    //.catch if there is an error
    .catch(error => 
    {
      //Log the error
      console.error(error);
    });

    // This effect should run every time time
    // the `id` changes... How could we do this?

    //[id] dependency ensures effect runs only when id changes
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }


  //If no movie...
  if (!movie) 
  {
    //...return this
    return <div>Loading movie information...</div>;
  }

  
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}