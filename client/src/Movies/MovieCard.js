import React from 'react';
// We'll need quite a few imports from react-router-dom
import {Route,NavLink,Switch,useParams,useRouteMatch} from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieList'

export default function MovieCard (props) {
  const {movies} = props;


  const { movieID } = useParams()
  const movie = movies.find(movie => movie.id == movieID)

  // We use this hook to grab information about the way React Router matched this route.
  const { path, url } = useRouteMatch()

  // This guards against a crash (the data is not available instantaneously)
  if (!movies.length) return 'Getting your movie...'

  return(
   <>
   </>
  );
}
