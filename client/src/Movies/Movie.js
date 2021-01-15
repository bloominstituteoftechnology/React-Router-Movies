import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { /*useRouteMatch,*/ useHistory, useParams } from 'react-router-dom';

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const history = useHistory();
  console.log('Movie Props:(from Movie.js file) ', props); //This is returning an empty array right now..

  
  const  {movieId} = useParams();
  // Change ^^^ that line and use a hook(the useParams) to obtain the :id parameter from the URL
  //My question is, how is this accessing the url? Isn't it just getting the id number from the array of movie objects? Or is that the url?
  //**This is returning a keyID&URL match from the object */


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`) // Study this endpoint with Postman
      .then(response => {
        console.log("Movie file useEffect", response.data) //give me the just the movie data
        setMovie(response.data);
        //console.log(response.config.url);//this gives me the url of an individual movie when clicked on
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this? --You do this by setting the props to the prop you want to trigger the repeated run
  }, [movieId]);

  //So the page isn't sending a new api call out with every id change, it just pulls from the backend? 

  if (!movie) {  //this is saying if there is no movie data, return:
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <>
      {/* I MADE CHANGES HERE */}
      <h2 
        style={{ color: 'dodgerblue', textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => history.push('/')}
      >
        Back to list{/*What this is doing is wrapping the text in between the h2 tags, and attaching an onlick event using useHistory from React Router to enable that text to route you back to the home page if you click on that text.*/ }
      </h2>
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
    </>
  );
}
