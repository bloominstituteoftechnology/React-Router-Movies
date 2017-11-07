import React from 'react';
import Movies from '../containers/Movies';
import MovieList from '../components/MovieList';

export default () => (
    <div className="page">
        <Movies>
        {
            movies => <MovieList movies={movies} />
        }
        </Movies> 
    </div>
)