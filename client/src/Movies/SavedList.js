import React from 'react';
import {NavLink, Link} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
    
      
      
      <div>   
    
    <NavLink to ={`/Movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
    </NavLink> 
      </div>
     
      

    ))}
    
    <Link to= "/"> 
    <div className="home-button">Home</div> 
    </Link>
    
  </div>

  
);

export default SavedList;
