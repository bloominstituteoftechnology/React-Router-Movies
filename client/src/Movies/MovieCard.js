import React from 'react';
import axios from "axios/index";

const MovieCard = props => {

    const {title, director, metascore, stars} = props.movie;
    return (
        <div className="movie-card">
            <div>
                <h2>{title}</h2>
                <div className="movie-director">
                    Director: <em>{director}</em>
                </div>
                <div className="movie-metascore">
                    Metascore: <strong>{metascore}</strong>
                </div>
                <h3>Actors</h3>

                {stars.map(star => (
                    <div key={star} className="movie-star">
                        {star}
                    </div>
                ))}
            </div>

            {props.addToSavedList && <button className="save-button" onClick={() => props.addToSavedList(props.movie)}>SAVE</button>}

        </div>
    )
};

export default MovieCard;
