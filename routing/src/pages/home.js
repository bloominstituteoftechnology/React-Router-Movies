import React from 'react';
import Movies from '../containers/Movies';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

export default () => (
    <div className="page">
        <Movies>
        {
            (movies, addMovie) => (
                <div className="home">
                    <MovieForm onSubmit={movie => addMovie({id: movies.length, ...movie})}/>
                    <MovieList movies={movies} />                    
                </div>
            )
        }
        </Movies> 
    </div>
)