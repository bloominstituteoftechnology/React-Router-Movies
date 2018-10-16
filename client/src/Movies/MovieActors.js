import React from 'react';

const MovieActors = props => {
  return (

      <div>
        <h3>Actors</h3>
        {props.actors.map((name, idx)=><p key={idx}>{name}</p>)}
      </div>
      );
};



export default MovieActors;
