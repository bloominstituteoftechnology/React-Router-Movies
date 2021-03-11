import React from 'react';
import {
  Route,
  NavLink,
  Switch,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieList'
export default function MovieCard (props) {
  const {movies} = props;
  const { movieID } = useParams()
  const movie = movies.find(movie => movie.id == movieID)
  const { path, url } = useRouteMatch()

  return;
}