import React from 'react';
import { Link } from 'react-router-dom';

export default ({movies}) => (
    <div className="MovieList">
        { movies.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
    </div>
)