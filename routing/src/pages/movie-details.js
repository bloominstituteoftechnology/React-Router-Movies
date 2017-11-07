import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../containers/Movie';


const renderStars = (stars) => (
    <div className="stars">
        { stars.map((star, i) => {
            <span>{star}</span>
        }) }
    </div>
)

export default ({match}) => {
    const id = match.params.id;
    return (
        <div className="page">
            <Link to="/">Home</Link>
            <Movie id={id}>
                {
                    movie => {
                        const stars = movie.stars;
                        return (
                            <div className="details">
                                <span className="title">{movie.title}</span>
                                <span className="director">{movie.director}</span>
                                <span className="score">{movie.metascore}</span>
                                { stars }
                            </div>
                        )
                    }
                }
            </Movie>
        </div>
    )
}

