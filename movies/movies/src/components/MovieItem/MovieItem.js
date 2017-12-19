import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MovieItem.css';

const MovieItem = (props) => {
  return (    
    <div className="Movie__item" onClick={ props.onClick }>
      <div className="Movie__title">
        <span className="index">{ props.index }.</span>
        <Link to={ "/movies/" + props.index }>{ props.title }</Link>
      </div>
    
    </div>
   );
};

export default MovieItem;