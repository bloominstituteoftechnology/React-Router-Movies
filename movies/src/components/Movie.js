import React from 'react';

export default (props) => {
    console.log(props.location.state)
    const state = props.location.state.movie;
    const image = {
        backgroundImage: 'url(' + state.img + ')',
    }
    return (
        <div className="this">
            <h1 className="movie-title">{state.title}</h1>
            <p>Directed By</p>
            <h2 classname="info" >{state.director}</h2>
            <p>Metascore</p>
            <h3 classname="info">{state.metascore}</h3>
            <p>Starring</p>
            <h4 classname="info">{state.stars.map((star, i) => {
                return i !== 0 ? ", " + star : star;
            })}
            </h4>
            <div className="movie-div" style={image}>
            </div>
        </div>
    )
}
