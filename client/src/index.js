import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

function Home() {
    return (
        <div>
            <MovieList/>
        </div>
    )
}

function SingleMovie(props) {
    return (
        <div>
            <Movie id={props.match.params.id}/>
        </div>
    )
}

ReactDOM.render(

        <Router>
            <div>
                <NavLink to="/" activeClassName="back-lnk" exact> Back </NavLink>

                <Route path="/" component={Home} exact />
                <Route path="/movies/:id/"  component={SingleMovie}/>
            </div>
        </Router>
    , document.getElementById('root')

);
