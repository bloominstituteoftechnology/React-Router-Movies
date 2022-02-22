import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default (props) => {
    const history = useHistory(); 
    const {list} = props
    return (
    <div className="saved-list">
      {console.log('rerendering')}
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <span key={movie.id} className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={()=>history.push('/')} className="home-button">Home</div>
    </div>
  );
}
