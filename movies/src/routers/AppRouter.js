import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MoviesHomePage from "../component/MoviesHomePage";
import MovieInfo from '../component/MovieInfo'
import MovieNav from '../component/MovieNav';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <MovieNav/>
      <Switch>
        <Route exact={true} path="/" component={MoviesHomePage}/>
        <Route path="/:id" component={MovieInfo}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;