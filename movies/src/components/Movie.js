import React from 'react';

const Movie = ({ movie, index }) => {
    return (
        <li>
            <p>{`${movie.title}`}</p>
        </li>
    );
};

export default Movie;