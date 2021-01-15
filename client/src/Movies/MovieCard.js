import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';

export default function MovieCard (props) {
  const [movie, setMovie] = useState({});

  // NOTE: only one prop will be defined
  // If route is for the MovieList on home, movieDetails will be defined, movieId will come from movieDetails.id
  // If route is for a MovieCard, movieList will be defined, movieId will come from useParams()
  let { movieList, movieDetails } = props; 
  console.log("Props from MovieCard: ", props);

  let { movieId } = useParams();
  console.log("movieId from MovieCard: ", movieId); // gets the movieId, an integer

  const isHomepage = movieDetails !== undefined;
    
  // account if movieDetails is undef or movieList is undef

  if (movieDetails !== undefined) {
    movieId = movieDetails.id; // can get movieId from movieDetails

  } else if (movieList !== undefined) {
    // we have movieId
    movieDetails = movieList.find(movie => `${movie.id}` === movieId);
  }; // defines movieId and defines movieDetails in the case where it's undef

  const history = useHistory();

  // const { id } = props
  // console.log("id: ", id);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`)
      .then(response => {
        console.log("Response from MovieCard useEffect: ", response);
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      }); 
  }, [movieId]); // uses movieId, fetches movie id info, movieId dependency

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }


  if (!movieDetails) {
    return <div>Loading movie information...</div>;
  };

  const { title, director, metascore } = movieDetails;
  const { stars } = movie;
  console.log("MOVIE CARD: movieDetails: ", movieDetails);
  console.log("MOVIE CARD director: ", director);
  
 


  return (
    <div className="save-wrapper">
      {/* <div onClick={(evt) => history.push(`/movies/${movie.id}`)} to={'/movies/:movie.id'} className="movie-card"> */}
      <div onClick={(evt) => history.push(`/movies/${movie.id}`)} className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div> 
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {/* Inline If with Logical && Operator */}
        { !isHomepage &&
        <h3>Actors</h3>
      }

      {/* Only render if it's not the homepage  */}
        {!isHomepage && stars && stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        
         

      </div>
      <div className="save-button">Save</div>
    </div>

    
  );
}
