import React from 'react';

const Movie = ({ movie, index }) => {
    return (
        <li>
            <p>{`Title: ${movie.title}`}</p>
            <p>{`Director: ${movie.director}`}</p>
            <p>{`Metascore: ${movie.metascore}`}</p>
            <p>{`Stars: ${movie.stars}`}</p>
        </li>
    );
};

export default Movie;