import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Movie from './Movie';
export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">
        <<Link to="/">Home</Link></div>
    </div>
    <Switch>
      <Route path="/">
          <Movie />
        </Route>
    </Switch>
  );
}
